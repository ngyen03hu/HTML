let arr = [2, 5, 4, 7, 1, 8, 6];
let number = Number(prompt("nhập vào một số bất kỳ"));
flag = 0;

if (isNaN(number)) {
    alert("Đây không phải là số");
} else {
    for (let i = 0; i < arr.length; i++) {
        if (number == arr[i]) {
            flag++;
            alert(" BIGO");
            break;
        }
    }
    if (flag == 0) {
        alert("Chúc bạn may mắn lần sau ");
    }
}