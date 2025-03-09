let array = [];
let length = Number(prompt("moi bạn nhập vào số phần tử trong mảng"));
let sum = 0;
let flag = 0;
if (length > 0) {
    for (let i = 1; i <= length; i++) {
        let number = prompt("moi bạn nhập vào giá trị vị trí thứ " + i);
        array.push(number);
    }
    for (let i = 0; i < array.length; i++) {
        let num = Number(array[i]);
        if (!isNaN(num)) {
            sum += num;
            flag = 1;
        }

    }
    flag ? alert(sum) : alert("không có ký tự số");
} else {
    alert("số lượng phần tử không hợp lệ")
}