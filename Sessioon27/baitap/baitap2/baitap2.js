let choice;
let danhSachSinhVien = [];
do {
    function nhapDanhSachSinhVie() {
        let soLuong = Number(prompt("MOi ban nhap so luong sing vien :"));
        for (let i = 0; i < soLuong; i++) {
            let nameStuden = prompt(`moi ban nhap ten day du  sinh vien ${i + 1}`);
            danhSachSinhVien.push(nameStuden);
        }
    }
    function showStuden() {
        for (let i = 0; i < danhSachSinhVien.length; i++) {
            alert(`${i + 1} ${danhSachSinhVien[i]}`);
        }
    }
    function searchStuden() {
        let tenTim = prompt("moi ban nhap ten can tim sinh vieen");
        let timthay = false;

        for (let i = 0; i < danhSachSinhVien.length; i++) {
            if (danhSachSinhVien[i] == tenTim) {
                alert(`da tim thay ${danhSachSinhVien[i]}`)
                timthay = true;
                break;
            }
        }
        if (!timthay) {
            alert(`sinh vien k co trong nay `);
        }
    }
    function deleteStuden() {
        let tenXoa = prompt("moi ban nhap ten muon xao");
        let timthay = false;

        for (let i = 0; i < danhSachSinhVien.length; i++) {
            if (danhSachSinhVien[i] == tenXoa) {
                danhSachSinhVien.splice(i, 1);
                alert(`da xoa sinh vien ${danhSachSinhVien[i]}`);
                timthay = true;
                break;
            }
        }
        if (!timthay) {
            alert("deo co ma xoa dm");
        }
    }
    choice = Number(prompt(`
        1.Nhập danh sách sinh viên.
        2.Hiển thị danh sách sinh viên.
        3.Tìm sinh viên theo tên.
        4.Xóa sinh viên khỏi danh sách.
        5.Thoát.`));
    switch (choice) {
        case 1:
            nhapDanhSachSinhVie();
            break;
        case 2:
            showStuden();
            break;
        case 3:
            searchStuden();
            break;
        case 4:
            deleteStuden();
            break
        case 5:
            alert("moi ban cut");
            break;
        default:
            alert("cut");
            break;
    }
} while (choice !== 5);