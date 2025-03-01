let number = prompt("MỜi bạn nhập số nguyên:");

number = Number(number);

if (number % 2 == 0) {
    alert("Đây là số chẵn :" + number);
} else {
    alert("Đây là số lẻ " + number);
}

number % 2 ? console.log("so chan") : console.log("so le")