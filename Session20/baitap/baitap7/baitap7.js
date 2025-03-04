let number = Number(prompt("Nhập n:"));
if (number && number >= 2) {
    let sum = [1, 1];

    for (let i = 2; i < number; i++) {
        sum[i] = sum[i - 1] + sum[i - 2];
    }
    console.log(sum);
} else {
    alert("Không hợp lệ");
}