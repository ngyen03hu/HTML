let array = [];

for (let i = 1; i <= 10; i++) {
    do {
        let number = prompt("moi bạn nhập vào giá trị vị trí thứ " + i);
        if (Number.isInteger(Number(number))) {
            array.push(number);
            break;
        } else {
            alert("moi bạn nhập lại giá trị đúng yêu cầu tại vị trí " + i);
        }
    } while (1);
}
array.sort((a, b) => a - b);
array.length === 0 ? alert("mảng không có phần tử") : alert(array[0]);