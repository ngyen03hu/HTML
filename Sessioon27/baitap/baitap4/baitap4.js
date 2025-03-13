let choice;

do {
    function promNumber() {
        let danhSach = [];
        let soLuong = Number(prompt("moi ban nhap so luong "))
        for (let i = 0; i < soLuong; i++) {
            let so = Number(prompt(`moi ban nhap so  luong phan tu ${i + 1}`));
            danhSach.push(so);
        }
        return danhSach;
    }
    function tinhTB(danhSach) {
        let sum = 0;
        for (let i = 0; i < danhSach.length; i++) {
            sum += danhSach[i];

        }
        return sum / danhSach.length;
    }
    function searchMax(danhSach) {
        let max = null;
        for (let i = 0; i < danhSach.length; i++) {
            if (danhSach[i] % 2 === 0 && (max === null || danhSach[i] > max)) {
                max = danhSach[i]
            }
        }
        return max;
    }
    function searchMin(danhSach) {
        let min = null;
        for (let i = 0; i < danhSach.length; i++) {
            if (danhSach[i] % 2 === 0 && (min === null || danhSach[i] < min)) {
                max = danhSach[i]
            }
        }
        return min;
    }
    choice = Number(prompt(`
    1. Nhập danh sách số nguyên.
    2.Tính trung bình các số.
    3.Tìm số chẵn lớn nhất.
    4.Tìm số lẻ nhỏ nhất.
    5.Thoát.`));
    switch (choice) {
        case 1:
            danhSach = promNumber();
            break;
        case 2:
            alert("Trung bình các số: " + tinhTB(danhSach));
            break;
        case 3:
            let sochan = searchMax(danhSach);
            alert("so chan lon nhat " + (sochan !== null ? sochan : "khong co so nao la so chan"));
            alert
            break;
        case 4:
            let sole = searchMin(danhSach);
            alert("so le lon nhat " + (sole !== null ? sole : "khong co so nao la so le"));
            break;
        case 5:
            alert("C U T");
            break;
        default:
            break;
    }
} while (choice !== 5);