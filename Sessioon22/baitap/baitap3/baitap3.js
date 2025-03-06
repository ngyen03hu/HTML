let number = prompt("Nhập vào một số bất kỳ");
if (isNaN(number)) {
    alert("Đây không phải là số");
} else {
    let reverseNumber = number.split("").reverse().join("");
    alert("Số đảo ngược của số bạn vừa nhập là: " + reverseNumber);
}