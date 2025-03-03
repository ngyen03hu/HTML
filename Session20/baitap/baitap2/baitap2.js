let inputChar = prompt("Nhập một ký tự:");
let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

if (alphabet.indexOf(inputChar) !== -1) {
    alert(`${inputChar} là chữ cái.`);
} else {
    alert(`${inputChar} không phải là chữ cái.`);
}
