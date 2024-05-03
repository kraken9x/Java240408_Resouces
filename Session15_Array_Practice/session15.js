// Tìm kiếm

// const numbers = [10, -1, 2, 4, 20, 10];
// //

// const userInput = +prompt("Please input number u want to find?");
// 4
// Tìm kiếm xem userInput có tồn tại trong mảng numbers hay không?
// Searching Algorithms - Thuật toán tìm kiếm
// trong mảng

// Linear search - Tìm kiếm tuyến tính

// Binary search - Tìm kiếm nhị phân (Nếu mảng đã được sắp xếp)

// let index = -1;

// for (let i = 0; i <= numbers.length - 1; i = i + 1) {
//   if (numbers[i] === userInput) {
//     index = i;
//     break;
//   }
// }

// Nếu tìm thấy : giá trị của biến index sẽ được cập nhật là vị trí
// của phần tử nằm trong mảng numbers;
// if (index === -1) {
//   console.log("Không tìm thấy phần tử", userInput, "trong numbers");
// } else {
//   console.log("Tìm thấy userInput trong numbers tại vị trí", index);
// }

// Nếu không tìm thấy: Giá trị của biến index sẽ luôn luôn là -1

// Câu lệnh có sẵn

// Array.indexOf(find)
// let result = numbers.indexOf(userInput); // Chỉ số
// console.log(result);
//
// Array.find()
// let result = numbers.find((element, index) => element === userInput);
// console.log(result);

// let result2 = numbers.find((element, index) => element % 3 === 0);
// console.log(result2);

// Array.findIndex()
// let result = numbers.findIndex((element, index) => element === userInput);
// console.log(result);

// max

// let arr = [-2, 10, 100, -1, 200, 50, 250];

// // Coi phần tử đầu tiên trong mảng là max
// let max = arr[0];
// let min = arr[0];
// // Duyệt qua mảng gốc
// // Lần lượt so sánh từng phần tử với max
// // Nếu phần tử trong mảng lớn hơn max ==> Phần tử đó sẽ là max mới

// for (let i = 0; i <= arr.length - 1; i = i + 1) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }

// for (let i = 0; i <= arr.length - 1; i = i + 1) {
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }

// console.log("max", max);
// console.log("min", min);

// let arr = [-2, 10, 100, -1, 200, 50, 250];

// Math.max()
// let max = Math.max(...arr);
// console.log(max);

// // Math.min()
// let min = Math.min(...arr);
// console.log(min);

let userInput = prompt(
  "Please input a sequence of numbers follow pattern 1,2,3..."
);

let numbers = userInput.split(","); // ["1", "2", "3", "4"]
let arr = [];
// for...of - Vòng lặp giúp duyệt qua từng phần tử trong mảng 1 cách GỌN GÀNG
for (let element of numbers) {
  arr.push(+element);
}

// for (let i = 0; i <= numbers.length - 1; i = i + 1) {
//   arr.push(+numbers[i]);
// }

// arr.map() -> Ánh xạ (Cùng chuyển đổi) các phần tử trong 1 mảng theo 1 công thức nào đó

// let arr = numbers.map((element, index) => `Từng el: ${element}`);
// let arr2 = numbers.map((element, index) => +element);
// let arr3 = numbers.map((element, index) => +element / 2);

// console.log(arr);
// console.log(arr2);
// console.log(arr3);

// console.log(arr);
// let count = 0;

// for (let element of arr) {
//   if (element >= 10) {
//     count = count + 1;
//   }
// }
// console.log(count);

//

// max = arr[0]
// index = 0;

// for() {
// max = arr[i]
// index = i
// }

// max
// Tìm ra số lớn nhất

// Tìm ra vị trí của số lớn nhất đó
