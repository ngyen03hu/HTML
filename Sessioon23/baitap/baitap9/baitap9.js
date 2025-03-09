let array = [];
let sum;
let choice;
let num;
do {
    choice = Number(prompt(
        `================== MENU ===================
    1.Nhập số phần tử cần nhập và giá trị các phần tử
    2.In ra giá trị các phần tử đang quản lý
    3.In ra giá trị các phần tử chẵn và tính tổng
    4.In ra giá trị lớn nhất và nhỏ nhất trong mảng
    5.In ra các phần tử là số nguyên tố trong mảng và tính tổng
    6.Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
    7.Thêm một phần từ vào vị trí chỉ định
    8.Thoát
 	============================================
    Mời bạn  nhập lựa chọn `));

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
            alert(" giá trị các phần tử đang quản lý" + array);
            break;
        case 3:
            sum = 0;
            flag = 0;
            for (let i = 0; i < array.length; i++) {
                if (!isNaN(array[i])) {
                    if (array[i] % 2 == 0) {
                        sum += array[i];
                        alert(array[i]);
                        flag = 1;
                    }
                }
                flag ? alert(`tổng mang chan la : ${sum}`) : alert("Trong mảng không có số chẫn");
            }
            break;
        case 4:
            if (array.length === 0) {
                alert("mảng trống ");
            } else {
                let sortedArr = arr.slice().sort((a, b) => a - b); // Sắp xếp đúng với số
                console.log(`Giá trị lớn nhất: ${sortedArr[sortedArr.length - 1]}, Giá trị nhỏ nhất: ${sortedArr[0]}`);
            }
            break;
        case 5:
            sum = 0;
            let primeNumbers = [];
            for (let i = 0; i < arr.length; i++) {
                let num = arr[i];
                if (num > 1) {
                    let isPrime = true;
                    for (let j = 2; j <= Math.sqrt(num); j++) {
                        if (num % j === 0) {
                            isPrime = false;
                            break;
                        }
                    }
                    if (isPrime) {
                        primeNumbers.push(num);
                    }
                }
            }
            primeNumbers.length > 0 ? console.log("Số nguyên tố trong mảng:", primeNumbers) : console.log("Không có số nguyên tố trong mảng.");
            break;

        case 6:
            let number = Number(prompt("Mời bạn nhập vào một số để kiểm tra:"));
            let count = 0;
            if (Number.isInteger(number)) {
                for (let i = 0; i < arr.length; i++) {
                    if (number === arr[i]) {
                        count++;
                    }
                }
            }
            count !== 0 ? console.log(`Số ${number} xuất hiện ${count} lần trong mảng.`) : console.log(`Số ${number} không tồn tại trong mảng.`);
            break;

        case 7:
            let index = Number(prompt("Mời bạn nhập vị trí cần thêm:"));
            let value = Number(prompt("Mời bạn nhập giá trị cần thêm:"));
            if (index >= 0 && index <= arr.length) {
                arr.splice(index, 0, value);
                console.log("Mảng sau khi thêm phần tử:", arr);
            } else {
                console.log("Vị trí không hợp lệ!");
            }
            break;

        case 8:
            console.log("Cảm ơn bạn đã sử dụng chương trình!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng chọn từ 1 đến 8.");
            break;
    }
} while (choice !== 8)