// console.log("Hello world");

// Ứng dụng quản lý các món ăn sẽ có trong nhà hàng
//

// let dish1 = "Thịt chó";
// let dish2 = "Giả cầy";
// let dish3 = "Tiểu hổ";
// let dish4 = "Thịt quay dòn bì";
// let dish6 = "Má heo chiên ròn";

// // ... Món 1000;
// let dish1000 = "Tóp mỡ chiều khúc";

//
// let dishes = [
//   "Thịt chó", // 0
//   "Giả cầy", // 1
//   "Tiểu hổ", // 2
//   "Thịt quay dòn bì", // 3
//   "Má heo chiên ròn", // 4
//   "Tóp mỡ chiều khúc", // 5
//   "Pịaaaaaa", // 6
// ];

//
// let singers = ["Jack 5 củ", "Sếp Tùng", "Kẹo con", "Đen vâu", "Binz"];

//
// let randomNumbers = [1, 2, 10, 20, -1, 20];

//
// let randomList = [10, true, false, "Hello", undefined, null];

// console.log(dishes);
// console.log("Tổng số món ăn", dishes.length);

// Read
// Read One
// let dis = dishes[3]; // Thịt quay dòn bì;
// console.log("Ship cho thằng Sơn 3 lạng", dis);
// console.log("Cho vào lò vi sóng 1 lạng", dis);

// console.log("Mời Quang ăn", dishes[0], "Nấu rượu mận"); // Thịt chó

// Read all
// Duyệt qua mảng

// let person = "Quang";
// for (let i = 0; i <= dishes.length - 1; i = i + 1) {
//   person = person + ` ăn ${dishes[i]},`;
// }
// console.log(person);

// console.log(dishes);

// Thêm đầu
// dishes.unshift("Xôi chim");
// Thêm cuối
// dishes.push("Mì indomie");
// Thêm vào vị trí bất kỳ
// Đợi tí
// console.log(dishes);

// Cập nhật
// dishes[3] = "Tiểu hổ v2.0";
// console.log(dishes);

// Delete
// Xoá đầu
// dishes.shift();

// Xoá cuối
// dishes.pop();

// console.log(dishes);

// Xoá phần tử tại vị trí bất kỳ
// splice(index, number)
// index: Vị trí phần tử muốn xoá
// number: số lượng phần tử muốn xoá bắt đầu từ vị trí đó

// dishes.splice(2, 1);

// console.log(dishes);

// Thêm mới 1 phần tử vào vị trí bất kỳ

// dishes.splice(3, 0, "KFC", "Hello");

// splice(number, 0, new);

// let dishes = [
//   "Thịt chó", // 0
//   "Giả cầy", // 1
//   "Tiểu hổ", // 2
//   "Thịt quay dòn bì", // 3
//   "Má heo chiên ròn", // 4
//   "Tóp mỡ chiều khúc", // 5
//   "Pịaaaaaa", // 6
// ];

// let sentence = "xin-chao-hom-nay-toi-an-pia";

// let letters = sentence.split("-");

// console.log(letters);

// let full = letters.join(" ");

// console.log(full);
