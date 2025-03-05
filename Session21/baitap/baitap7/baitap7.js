
// Yêu cầu người dùng nhập vào số tiền gửi ban đầu, lãi suất tháng và số tháng gửi
let principal = Number(prompt("Nhập số tiền gửi ban đầu (VNĐ):"));
let monthlyRate = Number(prompt("Nhập lãi suất tháng (%):")) / 100;
let months = Number(prompt("Nhập số tháng gửi:"));

let finalAmount = principal;

for (let i = 0; i < months; i++) {
    finalAmount += finalAmount * monthlyRate;
}


let interestEarned = finalAmount - principal;


interestEarned = Number(interestEarned.toFixed(3));
finalAmount = Number(finalAmount.toFixed(3));


document.write("Tiền ban đầu: " + principal);
document.write("<br>Lãi suất: " + (monthlyRate * 100) + "%");
document.write("<br>Số tháng gửi: " + months);
document.write("<br>Tiền lãi: " + interestEarned);
document.write("<br>Tiền nhận được: " + finalAmount);
