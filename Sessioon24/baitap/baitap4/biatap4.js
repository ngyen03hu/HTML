let array = [[], []];
let count;
let sum;
let choice;

do {
    choice = Number(prompt(`
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát chương trình

Mời bạn chọn
        `));
    switch (choice) {
        case 1:
            let row = Number(prompt("Nhập số hàng "));
            let col = Number(prompt("Nhập số cột "));
            if (row > 0 && col > 0) {
                for (let i = 0; i < row; i++) {
                    array[i] = [];
                    for (let j = 0; j < col; j++) {
                        do {
                            let number = Number(prompt(`array[${i}][${j}]`));
                            if (Number.isInteger(number)) {
                                array[i].push(number);
                                break;
                            } else {
                                alert("Nhập lại");
                            }
                        } while (1);
                    }
                }
            }
            break;
        case 2:
            alert("Mảng 2 chiều: ");
            for (let i = 0; i < array.length; i++) {
                alert(array[i]);
            }
            break;
        case 3:
            sum = 0;
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array[i].length; j++) {
                    sum += array[i][j];
                }
            }
            alert(`Tổng các phần tử trong mảng là ${sum}`);
            break;
        case 4:
            let max = array[0][0];
            let index = [0, 0];
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array[i].length; j++) {
                    if (array[i][j] > max) {
                        max = array[i][j];
                        index = [i, j];
                    }
                }
            }
            alert(`Phần tử lớn nhất trong mảng là ${max} ở vị trí ${index}`);
            break;
        case 5:
            let rowTB = Number(prompt("Nhập hàng cần tính trung bình "));
            if (rowTB >= 0 && rowTB < array.length) {
                sum = 0;
                for (let i = 0; i < array[rowTB].length; i++) {
                    sum += array[rowTB][i];
                }
                alert(`Trung bình cộng
            của hàng ${rowTB} là ${sum / array[rowTB].length}`);
            }
            break;
        case 6:
            for (let i = 0; i < array.length; i++) {
                array[i].reverse();
            }
            alert("Mảng sau khi đảo ngược các hàng: ");
            for (let i = 0; i < array.length; i++) {
                alert(array[i]);
            }
            break;
        case 7:
            alert("Thoát chương trình");
            break;
    }


} while (choice !== 7);