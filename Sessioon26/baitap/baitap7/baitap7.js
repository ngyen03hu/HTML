

function binhPhuong(arr) {
    if (Array.isArray(arr)) {
        if (arr.length > 0) {
            let newArr = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 == 0) {
                    newArr.push(arr[i] * arr[i]);
                }
            }
            alert(newArr);
        } else {
            alert("Mảng không có dữ liệu");
        }
    } else {
        alert("Dữ liệu không hợp lệ");
    }
}
binhPhuong([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);