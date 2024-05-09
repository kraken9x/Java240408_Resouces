// function frequencyCounter(word) {
//   let letters = word.split("");
//   let frequency = [];
//   ["H-1", "e-1", "l-1"]
//   for (let i in letters) {
//     let letter = letters[i];
//     let findIndex = frequency.findIndex(function (el) {
//       return el.startsWith(letter);
//     });
//     // ["H-1", "e-1", "l-1"]
//     if (findIndex < 0) {
//       frequency.push(`${letter}-1`);
//     } else {
//       let count = frequency[findIndex].split("-")[1];
//       frequency[findIndex] = `${letter}-${+count + 1}`;
//     }
//   }
//   console.log(frequency);
//   for (let freq of frequency) {
//     console.log(`Ký tự ${freq[0]} xuất hiện ${freq[2]} lần`);
//   }
// }

// frequencyCounter("Hello world");

// Ký tự H xuất hiện 1 lần
// Ký tự e xuất hiện 1 lần
// Ký tự l xuất hiện 3 lần
// ...

//

// let person = {
//   name: "Long",
//   age: 24,
//   handsome: true,
//   hobbies: ["Ngắm Gái", "Trap Boi", "Lướt Tinder", "Tập Gym"],
//   address: {
//     number: 36,
//     street: "Mễ Trì",
//     ward: "Mễ Trì",
//     district: "Nam Từ Liêm",
//     city: "Hà Nội",
//     zipcode: 100000,
//   },
// };

// console.log(person);

// Dot notation
// console.log("Tuổi", person.age); // 24
// console.log("Tên", person.name); // Long
// console.log("Đẹp zai k", person.handsome); // true

// console.log("Tuổi", person["age"]); // 24
// console.log("Tên", person["name"]); // Long
// console.log("Đẹp zai k", person["handsome"]); // true

// for...in
// for (let key in person) {
//   console.log(key, ":", person[key]);
// }

// Create
// person.jobs = ["Developer", "Designer", "FBoy"];

// console.log(person);

// Update
// Vừa kết sinh nhật -> Ông này tăng lên 1 tuổi
// person.age = 25;
// console.log(person);

// Delete
// delete person.age;
// console.log(person);

// Nested Object (Đối tượng lồng nhau)

// console.log("number", person.address.number);
// console.log("street", person.address.street);
// console.log("hobby 1", person.hobbies[0]);
// console.log("hobby 2", person.hobbies[1]);
// console.log("hobby 3", person.hobbies[2]);

// Quản lý 1 danh sách sinh viên có ở trong 1 lớp học
// sv1(tên, tuổi, gender) - ("Sơn", "18", "female")
// sv2(tên, tuổi, gender) - ("Tạc", "19", "gay")
// sv3(tên, tuổi, gender) - ("Quang", "29", "không xác định")

// const studentList = [
//   {
//     name: "Tạc",
//     age: "18",
//     gender: "gay",
//     handsome: true
//   },
//   {
//     name: "Sơn",
//     age: "19",
//     gender: "female",
//     handsome: true
//   },
//   {
//     name: "Quang",
//     age: "29",
//     gender: "không xác định",
//     handsome: true
//   },
// ];

// console.log(studentList[0].name); // {}
// console.log(studentList[0].age); // {}
// studentList[0].gender; // {}

// Duyệt qua mảng studentList - Thao tác với từng phần tử
// có trong mảng studentList

// for (let index in studentList) {
//   console.log(studentList[index].name); // {}, {}, {}
//   console.log(studentList[index].age); // {}, {}, {}
//   console.log(studentList[index].gender); // {}, {}, {}
// }

// constructor function
// class
// method
// ...

function frequencyCounter(word) {
  let letters = word.split(""); // ["H", "e", "l", "l", ... "d"];
  // Biến dùng để lưu trữ ký tự và tần số xuất hiện của ký tự đó
  let frequency = {};
  // B1: Duyệt qua mảng ký tự letters (Làm việc được với từng ký tự 1)
  // B2: Tại mỗi lần duyệt qua 1 ký tự
  // Kiểm tra xem đã có thuộc tính trùng với ký tự đang duyệt qua
  // nằm trong đối tượng frequency hay chưa

  // --- Nếu chưa
  // --- Thêm một thuộc tính trùng với ký tự đang duyệt qua và số lần xuất hiện của chúng
  // với giá trị LÀ 1
  // --- Nếu rồi
  // --- Gọi thuộc tính trùng với ký tự đang duyệt qua ra (frequency) và tăng giá trị của thuộc
  // tính đó lên 1
  for (let i in letters) {
    if (!frequency[letters[i]]) {
      frequency[letters[i]] = 1;
    } else {
      frequency[letters[i]] = frequency[letters[i]] + 1;
    }
  }
  console.log(frequency);
  // B3:
  for (let key in frequency) {
    console.log(`Ký tự ${key} xuất hiện ${frequency[key]} lần`);
  }
  // {"H": 1, "e": 1, "l": 2, ... "d": 1}
}

frequencyCounter("Hello world");

// Ký tự H xuất hiện 1 lần
// Ký tự e xuất hiện 1 lần
// Ký tự l xuất hiện 3 lần
// ...
