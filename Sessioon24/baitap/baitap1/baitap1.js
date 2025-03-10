let array = [];
let sum;
let flag;
let choice;
do {
    choice = Number(prompt(`
    ================MENU=======================
    1. Nhập mảng
    2. Hiển thị mảng
    3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
    4. Tính tổng các phần tử trong mảng
    5. Tìm số lần xuất hiện của một phần tử trong mảng
    6. Sắp xếp mảng tăng dần
    7. Thoát chương trình
    ==========================================
    MỜi bạn nhạp lựa chọn `));
    switch (choice) {
        case 1:
            let length = Number(prompt("Nhập số phần tử cần nhập và giá trị các phần tử"));
            if (length > 0) {
                for (let i = 0; i <= length; i++) {
                    do {
                        let number = Number(prompt("Nhập vào vị trí từng phần tử 1 " + i));
                        if (Number.isInteger(Number(number))) {
                            array.push(Number(number));
                            break;
                        } else {
                            alert("Mời bạn nhập lại ")
                        }
                    } while (1)
                }

            }
            break;
        case 2:
            alert("mang vua nhap " + array);
            break;
        case 3:
            let max = array[0];
            let min = array[0];
            for (let i = 0; i < array.length; i++) {
                if (max < array[i]) {
                    max = array[i];
                }
                if (min > array[i]) {
                    min = array[i];
                }
            }
            alert(`phan tu lon nhat ${max}`);
            alert(`pha tu nho nhat ${min}`);
            break;
        case 4:
            sum = 0;
            for (let i = 0; i < array.length; i++) {
                sum += +array[i]
                break;
            }
            alert(`tong ${sum}`);
            break;
        case 5:
            let finNumber = 0;
            let conut = 0
            finNumber = Number(prompt("moi ban nhap so "));
            if (finNumber > 0 || Number.isInteger(Number(number))) {
                for (let i = 0; i < array.length; i++) {
                    finNumber == array[i] ? conut++ : conut;
                }
                alert(`so lan xuat hien ${conut}`);
            }
            break;
        case 6:
            let sotArr = array.sort((a, b) => a - b);
            alert(`tang dan : ${sotArr}`);
            break;
        case 7:
            alert("cut");
            break;
        default:
            alert("sai ");
            break;
    }


} while (choice !== 7);
