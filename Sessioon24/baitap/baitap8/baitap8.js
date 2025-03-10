let String = "";
let choice;
do {
    choice = parseInt(prompt(`
        1. Nhập chuỗi ký tự
2. Hiển thị chuỗi ký tự
3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện
4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi
5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi
6. Chuyển đổi chuỗi ký tự thành dạng snake_case
7. Thoát chương trình
        `));
    switch (choice) {
        case 1:
            let str = prompt("Nhập chuỗi ký tự: ");
            break;
        case 2:
            alert(`Chuỗi ký tự: ${str}`);
            break;
        case 3:
            let arr = str.split(" ");
            let arr1 = [];
            for (let i = 0; i < arr.length; i++) {
                let count = 0;
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[i] === arr[j]) {
                        count++;
                    }
                }
                if (count > 0) {
                    arr1.push(arr[i]);
                }
            }
            alert(`Các từ con trùng lặp trong chuỗi: ${arr1}`);
            break;
        case 4:
            let arr2 = str.split(" ");
            let max = arr2[0];
            let min = arr2[0];
            for (let i = 0; i < arr2.length; i++) {
                if (arr2[i].length > max.length) {
                    max = arr2[i];
                }
                if (arr2[i].length < min.length) {
                    min = arr2[i];
                }
            }
            alert(`Từ có độ dài lớn nhất trong chuỗi: ${max}`);
            alert(`Từ có độ dài nhỏ nhất trong chuỗi: ${min}`);
            break;
        case 5:
            let arr3 = str.split("");
            let arr4 = [];
            for (let i = 0; i < arr3.length; i++) {
                let count = 0;
                for (let j = i + 1; j < arr3.length; j++) {
                    if (arr3[i] === arr3[j]) {
                        count++;
                    }
                }
                arr4.push(count);
            }
            let max1 = arr4[0];
            for (let i = 0; i < arr4.length; i++) {
                if (arr4[i] > max1) {
                    max1 = arr4[i];
                }
            }
            alert(`Số lần xuất hiện nhiều nhất của các ký tự trong chuỗi: ${max1}`);
            break;
        case 6:
            let arr5 = str.split(" ");
            let arr6 = [];
            for (let i = 0; i < arr5.length; i++) {
                arr6.push(arr5[i].toLowerCase());
            }
            let str1 = arr6.join("_");
            alert(`Chuỗi ký tự sau khi chuyển đổi: ${str1}`);
            break;
        case 7:
            alert("Thoát");
            break;
        default:
            alert("Nhập lại");
            break;
    }


} while (choice !== 7);