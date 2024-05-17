let form = document.getElementById("register-form");
let errorContainer = document.querySelector(".error-container");
let userList = JSON.parse(localStorage.getItem("userList"));

let emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

// Tối thiểu 8 ký tự, 1 thường, 1 số, 1 đặc biệt
let passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
form.onsubmit = function (e) {
  e.preventDefault();
  let email = form.email.value;
  let username = form.username.value;
  let password = form.password.value;
  let confirmPassword = form.confirmPassword.value;
  let cbox = form.cbox.checked;

  let errorMessage = "";

  if (!emailRegex.test(email)) {
    errorMessage = errorMessage + "Email không hợp lệ <br/>";
  }

  if (!username) {
    errorMessage = errorMessage + "Username không hợp lệ <br/>";
  }

  if (!passwordRegex.test(password)) {
    errorMessage = errorMessage + "Password không hợp lệ <br/>";
  }

  if (confirmPassword !== password) {
    errorMessage = errorMessage + "Confirm password không hợp lệ <br/>";
  }

  if (!cbox) {
    errorMessage =
      errorMessage +
      "Bạn chưa đồng ý với toàn bộ điều khoản của chúng tôi <br/>";
  }

  if (errorMessage) {
    errorContainer.innerHTML = `<div class="alert alert-danger" role="alert">
                                    ${errorMessage}
                                </div>`;
  }

  if (
    emailRegex.test(email) &&
    username &&
    passwordRegex.test(password) &&
    confirmPassword === password &&
    cbox
  ) {
    let user = userList.find(function (el, i) {
      return el.email === email || el.username === username;
    });
    if (!user) {
      errorContainer.innerHTML = "";

      let newUser = {
        id: userList[userList.length - 1].id + 1,
        name: "",
        age: "",
        email: email,
        username: username,
        password: password,
        dob: "",
        gender: "",
        bio: "",
      };
      userList.push(newUser);
      localStorage.setItem("userList", JSON.stringify(userList));

      Swal.fire({
        title: "Đăng ký thành công",
        text: "Chúc mừng bạn đã trở thành thành viên của chúng tôi",
        icon: "success",
      }).then(function () {
        window.location.href = "/login.html";
      });
    } else {
      errorContainer.innerHTML = `<div class="alert alert-danger" role="alert">
                                    Email hoặc username đã được đăng ký trước đây
                                </div>`;
    }
  }
};
