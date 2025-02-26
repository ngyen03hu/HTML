let number1 = prompt("moi ban nhap so thu nhat :");
let number2 = prompt("moi ban nhap so thu hai :");

let ramdom1 = Math.min(number1, number2);
let ramdom2 = Math.max(number1, number2);


let ramdomNumber = Math.floor(Math.random() * (ramdom2 - ramdom1 + 1)) + ramdom1;

alert(ramdomNumber);