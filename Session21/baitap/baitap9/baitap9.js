let number = Number(prompt("nhập số nguyên:"));
let sum = 1;
if (number && (number > 1)) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            sum = 0;
            break;
        }
    }
    sum == 1 ? alert(`Là số nguyên tố ${number}`) : alert("Không phải là số nguyên tố");
} else {
    alert(`Không phải là số nguyên tố ${number}`);
}