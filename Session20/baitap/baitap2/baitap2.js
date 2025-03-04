let N = Number(prompt("MỜi banj nhập số :"));

if (N <= 0 || Number(N) === "NaN") {
    alert("dữ liệu k hợp lệ ")
} else if (Number.isInteger(N)) {
    for (let i = 1; i <= N; i++) {
        if (i % 5 == 0) {
            alert(`cac so chia het cho 5 la :` + i);
        }
    }
} else {
    alert("dữ liệu k hợp lệ ");
}