let a = Number(prompt("mmoi ban nhap so a "));
let b = Number(prompt("mmoi ban nhap so b "));
let c = Number(prompt("mmoi ban nhap so c "));

let max = (a > b) ? (a > c ? a : c) : (b > c ? b : c);

alert(`số lướn nhất ${max}`);