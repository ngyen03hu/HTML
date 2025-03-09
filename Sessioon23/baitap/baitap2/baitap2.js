let array = [1, 2, 3, 6, 7, 11, 22, 8, 9];

if (array.length === 0) {
    console.log("Không có phần tử nào trong mảng");
} else {
    let max = array[0];
    let maxIndex = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            maxIndex = i;
        }
    }
    console.log(`Phần tử lớn nhất trong mảng là ${max} ở vị trí ${maxIndex}`);
}