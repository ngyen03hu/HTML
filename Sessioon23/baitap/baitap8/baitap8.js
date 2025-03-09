let array = [];
let length = Number(prompt("Mời bạn nhập vào số phần tử trong mảng"));

if (length > 0) {
    for (let i = 1; i <= length; i++) {
        do {
            let number = prompt("Mời bạn nhập vào giá trị vị trí thứ " + i);
            if (Number.isInteger(Number(number))) {
                array.push(Number(number));
                break;
            } else {
                alert("Mời bạn nhập lại giá trị đúng yêu cầu tại vị trí " + i);
            }
        } while (true);
    }

    let n = array.length;
    let result = "Là dãy số Fibonacci";

    if (n < 1) {
        result = "Không phải dãy số Fibonacci";
    } else if (n === 1) {
        result = arr[0] === 0 ? "Là dãy số Fibonacci" : "Không phải dãy Fibonacci";
    } else if (n === 2) {
        result = (array[0] === 0 && array[1] === 1) || (array[0] === 1 && array[1] === 1)
            ? "Là dãy số Fibonacci" : "Không phải dãy Fibonacci";
    } else {
        for (let i = 2; i < n; i++) {
            if (array[i] !== array[i - 1] + array[i - 2]) {
                result = "Không phải dãy số Fibonacci";
                break;
            }
        }
    }
    console.log(result);
} else {
    console.log("Số lượng phần tử không hợp lệ");
}