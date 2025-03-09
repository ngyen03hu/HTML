let arr = [];

let n;

do {
    n = Number(prompt(`MENU
       1.Nhập vào mảng
       2.Hiển thị mảng
       3.Thêm phần tử
       4.Sửa phần tử
       5.Xóa phần tử
       6.Thoát`));
    switch (n) {
        case 1:
            let array = prompt("Hãy nhập vào một mảng: ");
            arr = array.split("");
            break;
        case 2:
            alert(arr);
            break;
        case 3:
            let add = prompt("Thêm phần tử vào mảng: ");
            arr.push(add);
            break;
        case 4:
            let sua = Number(prompt("Sửa phần tử ở vị trí: "));
            let sua1 = prompt("Sửa thành: ");
            arr[sua] = sua1;
            break;
        case 5:
            let xoa = Number(prompt(`Xóa phần tử ${arr} `));
            if (xoa => 0 && xoa < arr.length) {
                arr.splice(xoa.length, 1);
            } else {
                alert("sai vi tri");
            }
        case 6:
            break;
        default:
            alert("loi")
    }

} while (n !== 6);