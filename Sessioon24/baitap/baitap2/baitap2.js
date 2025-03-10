let arr = [];
let sum;
let flag;
let num;
let choice;
do {
    choice = Number(prompt(`
        1. Nhập mảng số nguyên
        2. Hiển thị mảng
        3. Tìm các phần tử chẵn và lẻ
        4. Tính trung bình cộng của mảng
        5. Xóa phần tử tại vị trí chỉ định
        6. Tìm phần tử lớn thứ hai trong mảng
        7. Thoát chương trình 
        
        Moi ban dop
        `));
    switch (choice) {
        case 1:
            let length = Number(prompt("Moi ban nhap so phan tu "));
            if (length > 0) {
                for (let i = 0; i < array.length; i++) {
                    do {
                        let number = Number(prompt("arr[0]" + i))
                        if (Number.isInteger(Number(number))) {
                            array.push(Number(number));
                            break;
                        } else {
                            alert("moi ban nhap lai ");
                        }
                    } while (1);
                }
            }
            break;
        case 2:
            alert("mang sau khi nhap :" + array);
            break;
        case 3:
            let chan;
            let le;
            for (let i = 0; i < array.length; i++) {
                if (array[i] % 2 == 0) {
                    chan.push(array[i]);
                } else {
                    le.push(array[i])
                }
            }
            alert("chan" + chan);
            alert("le " + le);
            break;
        case 4:
            sum = 0;
            for (let i = 0; i < array.length; i++) {
                sum += array[i];
            }
            let Tb = sum / array.length
            alert(`cong la ${sum}`);
            alert(`tb cong la ${Tb}`);
            break;
        case 5:
            let index = parseInt(prompt("Nhập vị trí cần xóa"))
            if (isNaN(index) || index < 0 || index >= array.length) {
                alert("Vị trí không hợp lệ. Vui lòng nhập lại!")
            } else {
                for (let i = index; i < array.length - 1; i++) {
                    array[i] = array[i + 1]
                }
                array.pop()
                alert("Mảng sau khi xóa phần tử:", array);

            }
            break;
        case 6:
            let maxNumber1 = 0
            let maxNumber2 = 0
            for (let i = 0; i < array.length; i++) {
                if (array[i] > maxNumber1) {
                    maxNumber2 = maxNumber1
                    maxNumber1 = array[i]
                }
            }
            alert("Số lớn thứ 2 trong mảng là: ", +maxNumber2);
            break;
        case 7:
            alert("Thoát")
            break;
    }
} while (choice !== 7)