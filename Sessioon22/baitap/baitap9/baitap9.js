let arr = [2, 1, 7, 1, 1, 8, 6, 2, 2, 7];
let arr_length = arr.length;

for (let i = 0; i < arr_length; i++) {
    for (let j = 0; j < arr_length; j++) {
        if (arr[i] === arr[j] && i !== j) {
            arr.splice(j, 1);
            arr_length--;
        }
    }
}
arr.sort((a, b) => a - b);
document.write(`Mảng sau khi loại bỏ phần tử trùng lặp: ${arr}`);