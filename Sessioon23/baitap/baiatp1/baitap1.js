let array = [1, 2, 3, 6, 7, , 11, 22, 8, , 10, 9];
let arrTemp = [];
let count = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 10) {
        arrTemp.push(array[i]);
        count++;
    }
}
if (count === 0) {
    document.write("Không có phần tử nào lớn hơn 10 trong mảng");
} else {
    document.write(`Các phần tử lớn hơn 10 trong mảng là: ${arrTemp}`);
}