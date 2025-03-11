calcuate2Numbers(5, 6, '+');
calcuate2Numbers(5, 6, '-');
calcuate2Numbers(5, 6, '*');
calcuate2Numbers(5, 6, '/');

function calcuate2Numbers(number1, number2, operator) {
    if (operator == "+") {
        alert("ttoong = " + (number1 + number2));
    } else if (operator == "-") {
        alert("hieu = " + (number1 - number2));
    } else if (operator == "*") {
        alert("tich = " + (number1 * number2));
    } else if (operator == "/") {
        if (number2 == 0) {
            alert("khong the chia cho 0");
        } else {
            alert("thuong = " + (number1 / number2));
        }
    } else {
        alert("nhap lai");
    }
}

calcuate2Numbers(9, 69, '+');