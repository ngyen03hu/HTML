let arr = [];
let sum;
let flag;
let choice;

do {
    choice = Number(prompt(`
        1. Nhập mảng số nguyên
        2. Hiển thị mảng
        3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
        4. Tính tổng và trung bình cộng của các số dương trong mảng
        5. Đảo ngược mảng
        6. Kiểm tra mảng có đối xứng không
        7. Thoát chương trình    

        moi nhap "
        `));
    switch (choice) {
        case 1:
            let length = Number(prompt("moi ban nhap ao phan tu "));
            if (length > 0) {
                do {
                    for (let i = 0; i < arr.length; i++) {
                        let number = Number(prompt("arr[1] " + i));
                        if (Number.isInteger(Number(number))) {
                            arr.push(Number(number));
                            break;
                        } else {
                            alert("nhap lai m ngu a");
                        }
                    }
                } while (1);
            }
            break;
        case 2:
            alert("mang " + arr);
            break;
        case 3:
            let max = arr[0];
            let index = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                    index = i;
                }
            }
            alert(`Phan tu lon nhat la ${max} o vi tri ${index}`);
            break;
        case 4:
            sum = 0;
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    sum += arr[i];
                    count++;
                }
            }
            alert(`Tong cac so duong la ${sum}`);
            alert(`Trung binh cong cac so duong la ${sum / count}`);
            break;
        case 5:
            let newArr = [];
            for (let i = arr.length - 1; i >= 0; i--) {
                newArr.push(arr[i]);
            }
            alert("Mang dao nguoc la " + newArr);
            break;
        case 6:
            flag = true;
            for (let i = 0; i < arr.length / 2; i++) {
                if (arr[i] !== arr[arr.length - 1 - i]) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                alert("Mang doi xung");
            } else {
                alert("Mang khong doi xung");
            }
            break;
        case 7:
            break;
        default:
            alert("Nhap lai");
            break;

    }
} while (choice !== 7);