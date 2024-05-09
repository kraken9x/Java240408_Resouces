// let company = [
//   {
//     id: 1,
//     name: "Sơn",
//     age: 18,
//     salary: 1,
//   },
//   {
//     id: 2,
//     name: "Tạc",
//     age: 18,
//     salary: 1,
//   },
// ];

// while (true) {
//   let userInput = prompt("Please input C/R/U/D to manage staff list");

//   if (userInput === "C") {
//     // Thêm mới 1 nhân viên
//     let name = prompt("Please input staff name");
//     let age = prompt("Please input staff age");
//     let salary = prompt("Please input staff salary");
//     // Khi key === value ->
//     // Cú pháp es6
//     let staff = {
//       id: company[company.length - 1].id + 1,
//       name: name,
//       age,
//       salary,
//     };

//     company.push(staff);

//     displayStaff();
//   } else if (userInput === "R") {
//     // Hiển thị danh sách nhân viên
//     displayStaff();
//   } else if (userInput === "U") {
//     // Cập nhật lại thông tin của nhân viên
//     // Cập nhật lại lương của nhân viên

//     // Tìm kiếm ra nhân viên muốn cập nhật lại lương
//     let id = +prompt("Please input staff id");
//     let staffIndex = company.findIndex(function (el, i) {
//       return el.id === id;
//     });
//     if (staffIndex < 0) {
//       console.log("No staff found");
//     } else {
//       // New salary
//       let salary = +prompt("Please input new salary");
//       company[staffIndex].salary = salary;
//       displayStaff();
//     }
//   } else if (userInput === "D") {
//     // Xoá nhân viên
//   } else if (userInput === "E") {
//     // Dừng chương trình
//     console.log("Thanks for using the app");
//     break;
//   } else {
//     console.log("Invalid command");
//   }
// }

// function displayStaff() {
//   for (let i in company) {
//     console.log("----------------");
//     console.log("Id:", company[i].id);
//     console.log("Name:", company[i].name);
//     console.log("Age:", company[i].age);
//     console.log("Salary:", company[i].salary);
//   }
// }

let person = {
  id: 1, // property -> key: value
  name: "Ngọc VL",
  age: 18,
  job: ["dev", "student"],
  address: {
    number: 18,
    street: "Mễ Trì",
    ward: "Nam Từ Liêm",
    district: "Nam Từ Liêm",
    city: "Hà Nội",
  },
  single: false,
  // anonymous function - hàm không tên (ẩn danh)
  // Cú pháp thông thường của phương thức
  dance: function () {
    console.log("Tay dơ cao lên trời");
    console.log("Tay dang ngang bờ vai");
    console.log("Tay song song trước mặt");
    console.log("Buông cả 2 tay");
    console.log(this);
  },
  // Cú pháp es6 - cú pháp viết tắt shorthand
  sayHello(name) {
    console.log("Hello", name);
    console.log(this);
  },
  introduce(weight, height) {
    console.log(
      `Hello, my name is ${this.name}. I'm ${this.age} years old. I'm ${weight}kg and ${height}cm tall`
    );
    console.log(this);
  },
};

person.dance();
//

person.sayHello("Viện");
//

console.log(this);

person.introduce();

// Phát sinh ra 1 trường hợp

let introduce = person.introduce;
console.log(introduce);

// let introduce = function () {
//   console.log(`Hello, my name is ${this.name}. I'm ${this.age} years old`);
// };
// {}
// bind - Ràng buộc từ khoá this
// introduce = introduce.bind({ name: "Viện", age: 19 }); // this --> person

// call, apply - Ràng buộc từ khoá this, nhưng hàm sẽ được thực thi luôn

// introduce.call({ name: "Viện", age: 20 }, 70, 150);
// introduce.apply({ name: "Ngọc", age: 18 }, [50, 190]);
