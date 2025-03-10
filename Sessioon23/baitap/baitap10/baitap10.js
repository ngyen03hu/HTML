let array = [];

let sum;
let flag;
let num;
let choice;
do {
    choice = Number(prompt(`
    ================== MENU =================== 
1. Nhập số phần tử cần nhập và giá trị các phần tử 
2. In ra giá trị các phần tử đang quản lý 
3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần
4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng 
5. In ra các số nguyên tố trong mảng và tính tổng 
6. Nhập một số và đếm số lần xuất hiện trong mảng 
7. Thêm một phần tử vào vị trí chỉ định 
8. Xóa một phần tử theo giá trị 
9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần 
0. Thoát 
============================================
Lựa chọn của bạn: `));
    switch (choice) {
        case 1:
            let length = Number(prompt("Nhập số phần tử cần nhập và giá trị các phần tử : "));
            if (length > 0) {
                for (let i = 0; i <= length; i++) {
                    do {
                        let number = Number(prompt("Mời bạn nhạp từng phằn tử 1 " + i));
                        if (Number.isInteger(Number(number))) {
                            array.push(Number(number));
                            break;
                        } else {
                            alert("MỜi bạn nhập lại ");
                        }
                    } while (1)
                }
            }
            break;
        case 2:
            alert(" giá trị các phần tử đang quản lý : " + array);
            break;
        case 3:
            sum = 0;
            flag = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] % 2 == 0) {
                    sum += array[i];
                    alert(array[i]);
                    flag = 1;
                }
            }
            array.splice().sort((a, b) => b - a);
            flag ? alert(`tổng mang chan la : ${sum}`) : alert("Trong mảng không có số chẫn");
            alert(array);
            break;
        case 4:
            if (array.length === 0) {
                alert("mảng trống ");
            } else {
                let sortedArr = array.slice().sort((a, b) => a - b); // Sắp xếp đúng với số
                console.log(`Giá trị lớn nhất: ${sortedArr[sortedArr.length - 1]}, Giá trị nhỏ nhất: ${sortedArr[0]}`);
            }
            break;
        case 5:
            sum = 0;
            let primeNumbers = [];
            for (let i = 0; i < array.length; i++) {
                let num = array[i];
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
            primeNumbers.length > 0 ? alert("Số nguyên tố trong mảng:", primeNumbers) : alert("Không có số nguyên tố trong mảng.");
            break;
        case 6:
            let number = Number(prompt("Mời bạn nhập vào một số để kiểm tra:"));
            let count = 0;
            if (Number.isInteger(number)) {
                for (let i = 0; i < array.length; i++) {
                    if (number === array[i]) {
                        count++;
                    }
                }
            }
            count !== 0 ? alert(`Số ${number} xuất hiện ${count} lần trong mảng.`) : calert(`Số ${number} không tồn tại trong mảng.`);
            break;
        case 7:
            let index = Number(prompt("Mời bạn nhập vị trí cần thêm:"));
            let value = Number(prompt("Mời bạn nhập giá trị cần thêm:"));
            if (index >= 0 && index <= array.length) {
                array.splice(index, 0, value);
                alert("Mảng sau khi thêm phần tử:", arr);
            } else {
                alert("Vị trí không hợp lệ!");
            }
            break;
        case 8:
            let valueToDelete = Number(prompt("Mời bạn nhập giá trị cần Xoa:"));
            let indexToDelete = array.indexOf(valueToDelete);
            if (indexToDelete !== -1) {
                array.splice(indexToDelete, 1);
            }
            alert(array);
        case 9:
            alert(" giá trị các phần tử đang quản lý : " + array);
            array.splice().sort((a, b) => b - a);
            alert("sau khi sap xep giam dan " + array);
            array.splice().sort((a, b) => a - b);
            alert("sau khi sap xep Tam dan " + array);
            break;
        default:
            alert("mmmm");
    }
} while (choice !== 0);