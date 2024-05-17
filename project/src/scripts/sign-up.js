let form = document.getElementById("register-form");
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
  let cbox = form.cbox.value;

  if (!emailRegex.test(email)) {
    console.log("Email không hợp lệ");
  }

  if (!username) {
    console.log("Username không hợp lệ");
  }

  if (!passwordRegex.test(password)) {
    console.log("Password không hợp lệ");
  }

  if (confirmPassword !== password) {
    console.log("Confirm password không hợp lệ");
  }
};
