let a = Number(prompt("a:"));
let b = Number(prompt("b:"));
let sum = 1;
if (a && b && a != 0) {
    if (b > 0) {
        for (let i = 0; i < b; i++) {
            sum *= a;
        }
    } else {
        // 5^-2 = 1/(5^2)
        for (let i = 0; i < b; i++) {
            sum *= a;
        }

    }
    alert(sum);
} else {
    alert("Không hợp lệ");
}