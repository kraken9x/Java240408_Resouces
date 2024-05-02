// In ra màn hình console 1000 lần dòng "Hello world"
// --->
// Lặp đi lặp lại 1000 lần tác vụ console.log("Hello world")

// Để thiết lập số lần lặp của vòng lặp for

// Có 1 biến chạy theo dõi số lần lặp (Thông thường gọi là i)

// - Điểm bắt đầu của vòng lặp
// - Điểm kết thúc của vòng lặp
// - Bước nhảy của biến chạy i

// for (let i = 0; i < 10; i = i + 2) {
//   console.log("Hello world");
//   console.log(i);
// }

// Lần lặp thứ 1: i = 0; 0 < 5 (true), In ra "Hello world", i = 0 + 1 (1)
// Lần lặp thứ 2: i = 1; 1 < 5 (true), In ra "Hello world", i = 1 + 1 (2)
// Lần lặp thứ 3: i = 2; 2 < 5 (true), In ra "Hello world", i = 2 + 1 (3)
// Lần lặp thứ 4: i = 3; 4 < 5 (true), In ra "Hello world", i = 3 + 1 (4)
// Lần lặp thứ 5: i = 4; 4 < 5 (true), In ra "Hello world", i = 4 + 1 (5)
// Lần lặp thứ 6: i = 5; 5 < 5 (false), Vòng lặp dừng lại

// Ex1: Cho người dùng nhập vào số n

// Tính tổng của dãy số A = 1 + 2 + 3 + ... n;

// Tính tích của dãy số B = 1.2.3....n

// Tính tổng của dãy số C = 1^2 + 2^2 + 3^2 + ... n^2

// Ex2: Cho người dùng nhập vào số n

// In ra dãy số từ 1 đến n
// Trong quá trình in ra kiểm tra nếu số nào
// Chia hết cho 3 thì in ra Fizz
// Chia hết cho 5 thì in ra Buzz
// Chia hết cho cả 3 và 5 thì in ra FizzBuzz

// Ex1:

// B1: Cho người dùng nhập vào số n

// let n = +prompt("Mời bạn nhập vào số n");

// let total = 0;

// for (let i = 1; i <= n; i = i + 1) {
//   total = total + i;
// }

// Lần lặp 1: total = 0 + 1
// Lần lặp 2: total = 0 + 1 + 2
// Lần lặp 3: total = 0 + 1 + 2 + 3

// Lần lặp n: total = 0 + 1 + 2 + 3 .... + n

// Tính tổng A = 1 + 2 + 3 + ... + n;

// let n = +prompt("Mời bạn nhập vào số n");

// let total = 1;

// for (let i = 1; i <= n; i = i + 1) {
//   total = total * i;
// }

// Lần lặp 1: total = 1 * 1
// Lần lặp 2: total = 1 * 1 * 2
// Lần lặp 3: total = 1 * 1 * 2 * 3
// ...
// Lần lặp n: total = 1 * 1 * 2 * 3 * ... * n

// let n = +prompt("Mời bạn nhập vào số n");

// let result = 0;

// for (let i = 1; i <= n; i = i + 1) {
//   result = result + i ** 2;
// }

// console.log("C =", result);

// C = 0 + 1^2 + 2^2 + 3^2 + ... + n^2'

// Ex2: Cho người dùng nhập vào số n

// In ra dãy số từ 1 đến n

// Trong quá trình in ra kiểm tra nếu số nào

// Chia hết cho 3 thì in ra Fizz
// Chia hết cho 5 thì in ra Buzz
// Chia hết cho cả 3 và 5 thì in ra FizzBuzz

// let n = +prompt("Please input n:");

// for (let i = 1; i <= n; i = i + 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }

// console.log("1 * 1 = 1");
// console.log("1 * 2 = 2");
// console.log("1 * 3 = 3");
// console.log("1 * 4 = 4");
// console.log("1 * 5 = 5");
// console.log("1 * 6 = 6");
// console.log("1 * 7 = 7");
// console.log("1 * 8 = 8");
// console.log("1 * 9 = 9");
// console.log("1 * 10 = 10");

// for (let j = 1; j <= 9; j = j + 1) {
//   for (let i = 1; i <= 10; i = i + 1) {
//     // Tại mỗi một lần lặp
//     // Tiến hành tính toán giá trị của 1 * i
//     let result = j * i;
//     console.log(`${j} * ${i} = ${result}`);
//   }
// }

// for (let i = 1; i <= 10; i = i + 1) {
//   // Tại mỗi một lần lặp
//   // Tiến hành tính toán giá trị của 1 * i
//   let result = 2 * i;
//   console.log(`2 * ${i} = ${result}`);
// }

// for (let i = 1; i <= 10; i = i + 1) {
//   // Tại mỗi một lần lặp
//   // Tiến hành tính toán giá trị của 1 * i
//   let result = 3 * i;
//   console.log(`3 * ${i} = ${result}`);
// }

// for (let i = 1; i <= 10; i = i + 1) {
//   // Tại mỗi một lần lặp
//   // Tiến hành tính toán giá trị của 1 * i
//   let result = 4 * i;
//   console.log(`4 * ${i} = ${result}`);
// }

// 2 - N

// Hiển thị các kết quả chia hết cho 2
// // dưới dạng bình phương
// let n = +prompt("Please input n");

// if (n < 2 || n > 100) {
//   console.log("Số n nhập vào không hợp lệ, mời nhập lại");
// } else {
//   // B2:
//   for (let i = 2; i <= n; i = i + 1) {
//     if (i % 2 === 0) {
//       console.log(i ** 2);
//     }
//   }
// }

// rgb = rgb(red, green, blue)
// r, g, b trong khoảng [0 - 255]

// rgb = rgb(red(0-255), green(0-255), blue(0-255))

// Math.random() -- [0 - 0.9999999999999] * 256
//               -- [0 - 255.99999999999]
// Math.floor()

// for (let i = 10; i >= 1; i = i - 1) {
//   let random = Math.random(); // Ngẫu nhiên từ 0 - 0.9999999
//   let random2 = Math.random();
//   let random3 = Math.random();

//   let red = Math.floor(random * 256);
//   let green = Math.floor(random2 * 256);
//   let blue = Math.floor(random3 * 256);

//   let randomColor = `rgb(${red}, ${green}, ${blue})`;

//   console.log("%cHello world", `background: ${randomColor}; color: white`);
// }

// let a = 1;
// let b = 1;

// let next = a + b; // 2

// Logic để tính toán ra 1 dãy fibo

// Giá trị của số thứ 1 (a)
// Giá trị của số thứ 2 (b)

// Giá trị của 2 số nằm đằng trước trong dãy fibo

// Tính ra được giá trị của số tiếp theo trong dãy fibo (next) = Số 1 + Số 2

// Biến số a thành số b

// Biến số b thành số next

// tính toán số tiếp theo

// Ex: Tạo ra 1 game đoán số (1 - 100)

// Tạo sẵn 1 biến gọi là result

let result = 49;

// Cho người dùng nhập vào số đoán

// ----- Logic cần phải lặp đi lặp lại
// let loop = true;
// while (loop == true) {
//   let answer = +prompt("Please guess from (1 - 100)");

//   // Nếu answer > result (Too big)
//   // Nếu answer < result (Too small)
//   // Nếu answer == result (Bingo)

//   if (answer > result) {
//     console.log("Too big");
//   } else if (answer < result) {
//     console.log("Too small");
//   } else {
//     console.log("Bingo");
//     // Dừng vòng lặp
//     loop = false;
//   }
// }
// ----- Logic cần phải lặp đi lặp lại

// Ex:

// Viết 1 ứng dụng hỏi người dùng
// Mày có yêu tao không

// Lặp đi lặp lại quá trình cho người dùng nhập vào câu trả
// Chỉ dừng chương trình khi người dùng trả lời "yes"
