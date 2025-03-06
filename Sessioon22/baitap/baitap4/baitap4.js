let arr = prompt("Nhập vào một số bất kỳ");

let number = arr.split("");

if (isNaN(arr)) {
    alert("Đây không phải là số");
} else {
    let max = arr[0];
    for (let i = 0; i < number.length; i++) {
        if (max < number[i]) {
            max = number[i];
        }
    }
    alert("Số lớn nhất trong số bạn vừa nhập là: " + max);
}