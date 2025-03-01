let yers = Number(prompt("năm kinh nghiệm của nhân viên"));

if (yers < 1) {
    alert("Mới vào nghề");
} else if (1 <= yers <= 3) {
    alert("Nhân viên có kinh nghiệm")
} else if (4 <= yers <= 6) {
    alert("Chuyên viên");
} else {
    alert("Quản lý");
}