// let h1 = document.getElementById("h1");

// console.dir(h1);

// console.log(h1.innerText);

// console.log(h1.textContent);

// console.log(h1.innerHTML); // Một chuỗi có định dạng HTML

// h1.innerText = "Hello world";

// h1.textContent = "Update by text content";

// h1.innerHTML = "<u>Update by inner html</u>";

// let btn = document.getElementById("btn");
// let div = document.getElementById("content");

// console.log(div.style);

// btn.onclick = function () {
//   //   if (div.style.display !== "") {
//   //     div.style.display = "";
//   //   } else {
//   //     div.style.display = "none";
//   //   }
//   // c2
//   //   if (div.classList.contains("hide")) {
//   //     div.classList.remove("hide");
//   //   } else {
//   //     div.classList.add("hide");
//   //   }
//   // c3
//   div.classList.toggle("hide");
// };

// let img = document.createElement("img"); // img
// let container = document.getElementById("container");
// console.log(img);
// console.log(container);

// img.src =
//   "https://cand.com.vn/Files/Image/thuthuy/2019/10/31/ea654603-db33-4b11-8b28-bb7e101769d3.jpg";

// container.appendChild(img);

// let btn = document.getElementById("btn");

// btn.onclick = function handleClick() {
//   document.getElementById("content").classList.toggle("hide");
// };

// btn.addEventListener("click", function () {
//   document.getElementById("content").classList.toggle("hide");
// });

// let form = document.getElementById("form");

// form.onsubmit = function (event) {
//   event.preventDefault();
//   console.log("Hello world");
// };

let todoList = [
  {
    id: 1,
    content: "Hit the gym",
    status: false,
  },
  {
    id: 2,
    content: "Pay bills",
    status: true,
  },
  {
    id: 3,
    content: "Meet George",
    status: false,
  },
];

let ul = document.getElementById("myUL");
let addBtn = document.getElementsByClassName("addBtn")[0];

// ul.insertAdjacentHTML("afterbegin", li);
// ul.insertAdjacentHTML("beforebegin", li);
// ul.insertAdjacentHTML("afterend", li);
// ul.insertAdjacentHTML("beforeend", li);

function render() {
  ul.innerHTML = "";
  for (let i in todoList) {
    // {todoItem} ---> <li></li> --> <ul></ul>
    // C1:
    // Tạo ra thực sự một phần tử HTML
    // document.createElement()
    //   let li = document.createElement("li");
    //   li.innerHTML = todoList[i].content;
    //   if (todoList[i].status) {
    //     li.classList.add("checked");
    //   }
    //   ul.appendChild(li);
    // C2:
    // Tạo ra một chuỗi có định dạng HTML
    let li = `<li id="${todoList[i].id}" class="${
      todoList[i].status ? "list-item checked" : "list-item"
    }">
        ${todoList[i].content}
        <span class="close">×</span>
    </li>`;

    //   ul.innerHTML = ul.innerHTML + li;

    // C3:
    // insertAdjacent
    ul.insertAdjacentHTML("beforeend", li);
  }
  //   // Gọi tập hợp thẻ li mới ra
  //   let liList = document.getElementsByTagName("li");
  //   // Gắn sự kiện tại nơi chúng được sinh ra
  //   for (let i = 0; i < liList.length; i = i + 1) {
  //     liList[i].onclick = function () {
  //       // Cập nhật lại trạng thái status của phần tử li
  //       // đang bấm vào tương ứng với phần tử đó trong CSDL
  //       todoList[i].status = !todoList[i].status;
  //       // render()
  //       render();
  //     };
  //   }

  //   let delList = document.querySelectorAll("span.close");
  //   for (let i = 0; i < delList.length; i = i + 1) {
  //     delList[i].onclick = function (event) {
  //       event.stopPropagation();
  //       // Xoá phần tử li là bố của nút delete
  //       // đang bấm vào tương ứng với phần tử đó trong CSDL
  //       todoList.splice(i, 1);
  //       render();
  //     };
  //   }
}

render();
// addbtn

addBtn.onclick = function () {
  // Tạo ra 1 đối tượng todo mới
  let newTodo = {
    id: todoList[todoList.length - 1].id + 1,
    content: document.getElementById("myInput").value,
    status: false,
  };
  // Lưu đối tượng đó vào trong CSDL
  todoList.push(newTodo);
  // Phản ánh sự thay đổi của CSDL lên trên trình duyệt
  render();
};

// Event Delagation (Uỷ quyền sự kiện)
ul.onclick = function (event) {
  // Ngăn chặn được tình trạng event bubbling (Nổi bọt sự kiện)
  if (event.target.classList.contains("close")) {
    // Logic dùng để xoá 1 todo khỏi todoList
    console.log("Logic delete");
  }
  if (event.target.classList.contains("list-item")) {
    // Logic dùng để cập nhật 1 todo trong todoList
    let id = event.target.id;

    let findIndex = todoList.findIndex(function (el, i) {
      return el.id === +id;
    });

    todoList[findIndex].status = !todoList[findIndex].status;

    render();
  }
};
