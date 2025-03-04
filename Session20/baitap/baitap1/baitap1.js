let N = Number(prompt("MỜi bạn nhập số N:"));

let sum = 0;
if (N <= 0 || Number(N) === "NaN") {
    alert("dữ liệu k hợp lệ ")
} else if (Number.isInteger(N)) {
    for (let i = 0; i <= N; i++) {
        sum += i;

    }
    alert(`${sum}`);
} else {
    alert("dữ liệu k hợp lệ ");
}