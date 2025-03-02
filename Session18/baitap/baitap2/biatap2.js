let math = Number(prompt("Moi ban nhap diem Toan :"));
let Literature = Number(prompt("Moi ban nhap diem Van :"));
let English = Number(prompt("Moi ban nhap diem Anh :"));

let sum_TB = (math + Literature + English) / 3;

if (sum_TB >= 8.0) {
    alert("Giỏi");
} else if (6.5 <= sum_TB <= 7.9) {
    alert("Khá");
} else if (5.0 <= sum_TB <= 6.4) {
    alert("Trung bình ");
} else if (sum_TB < 5.0) {
    alert("Yếu");
}
