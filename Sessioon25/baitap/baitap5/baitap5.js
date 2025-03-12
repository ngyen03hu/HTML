function checkNumber(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ Liệu không hợp lệ.");
        return;
    } else if (arr.length === 0) {
        console.log("Mảng rỗng.");
        return;
    } else {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (Number.isInteger(arr[i]) && arr[i] > 0) {
                count++;
            }
        }
        if (count > 0) {
            console.log("Mảng có tổng số nguyên dương là: ", count);
        } else {
            console.log("Mảng không có số nguyên dương.");
        }
    }
}

checkNumber([4.5, 9, 2]);
checkNumber([9.5, 7, -8, 6]);
checkNumber([1.2, -3, -6]);
checkNumber([]);
checkNumber("not an array");  
