//
// const todoList = [
//   "Do homework at 8pm",
//   "Do exercises everyday",
//   "Go to bed early",
// ];

// Xây dựng chương trình ứng dụng todo List
// Cho người dùng nhập vào 4 chữ cái C/R/U/D

// while (true) {
//   let userInput = prompt("Please input C/R/U/D to control your todo list");

//   if (userInput === "C") {
//     let todo = prompt("Please input todo content");
//     // Thêm mới 1 todo vào trong todoList
//     todoList.push(todo);
//     printTodo();
//   } else if (userInput === "R") {
//     printTodo();
//   } else if (userInput === "U") {
//     // Cập nhật nội dung của 1 todo
//     // Vị trí
//     let index = +prompt("Please input todo index");
//     // Nội dung mới cần cập nhật cho phần tử todo tại vị trí đó
//     let content = prompt("Please input new todo content");
//     // Cập nhật
//     todoList[index - 1] = content;
//     printTodo();
//   } else if (userInput === "D") {
//     // Xoá 1 todo ra khỏi todoList
//     // In ra danh sách todo
//   } else if (userInput === "E") {
//     // Thoát khỏi chương trình
//     console.log("Thanks for using the app");
//     break;
//   } else {
//     // Invalid commands
//   }
// }

// Đóng gói 1 lần duy nhất
// function printTodo() {
//   // In ra danh sách todo
//   for (let index in todoList) {
//     console.log(`${+index + 1}. ${todoList[index]}`);
//   }
// }

// .....

// Giả sử
// Xây dựng 1 chương trình (1 hàm) máy tính cầm
// tay chỉ thực hiện phép cộng tính tổng của 2 số bất kỳ

// Đối số thực tế (Arguments)
// let result = calculator(1, 2); // 3
// console.log(result);
// alert(result);
// document.write(`${result}`);
// 1, 2 ---> 3

// console.log(calculator(4, 5)); // 9
// 4, 5 ---> 9

// calculator(10, 20); // 30
// 10, 20 ---> 30

// function calculator(a, b) {
//   // Tham số đại diện/tổng quát (Parameters)
//   // let a = 1;
//   // let b = 2;
//   // 1, 2 --> 3
//   // let a = 4;
//   // let b = 5;
//   // 4, 5 --> 9
//   // let a = 10;
//   // let b = 20;
//   // 10, 20 --> 30
//   // Tiến hành tính toán (Thực hiện logic)
//   // với các tham số đại diện
//   //   return a + b;
//   // Tính toán tổng của những số
//   // đầu vào tại những lần sử dụng hàm
// }

// let, const

// var a = 10;

// {
//   var b = 20;
//   // console.log(b);
//   {
//     var c = 30;
//     console.log(c);
//   }
//   console.log(c);
// }

// console.log(b);

// if/else, switch/case, loop, function

// function helloWorld() {
//   var a = "Hello world";
//   console.log(a);
// }

// if (true) {
//   var b = 10;
// }

// console.log(b);

// console.log(a);

// let a = 10;
// const b = 20;
// var c = 30;

// {
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   let d = 40;
//   const e = 50;
//   var f = 60;
// }

// console.log(f);

// function sayHello() {
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   let var1 = 100;
//   const var2 = 200;
//   var var3 = 300;
// }

// sayHello();

// console.log(var1);
// console.log(var2);
// console.log(var3);

// Hoisting

debugger;

console.log(a);

var a = 10;

hello();

function hello() {
  console.log("Hello world !!!!");
}

let b = 20;
const c = 30;

console.log(b + c);

var d = 40;
console.log(d);
