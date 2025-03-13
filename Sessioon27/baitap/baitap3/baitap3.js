let choice;
do {
    function language(r) {
        return Math.PI * Math.pow(r, 2);
    }
    function perimeter(R) {
        return 2 * Math.PI * R;
    }
    function Rectangular(dai, rong) {
        return dai * rong;
    }
    function Perimeter(Dai, Rong) {
        return 2 * (Dai + Rong);
    }
    choice = Number(prompt(`
        1. Tính diện tích hình tròn.
        2. Tính chu vi hình tròn.
        3. Tính diện tích hình chữ nhật.
        4. Tính chu vi hình chữ nhật.
        5. Thoát.`));
    switch (choice) {
        case 1:
            let r = Number(prompt("Moi ban nhap so ban kinh : "));
            if (r > 0) {
                alert(`dien tich hinh tron la : ${language(r).toFixed(2)} `);
            } else {
                alert("ban kinh phai lon hon 0");
            }
            break;
        case 2:
            let R = Number(prompt("Moi ban nhap so ban kinh : "));
            if (R > 0) {
                alert(`dien tich hinh tron la : ${language(R).toFixed(2)} `);
            } else {
                alert("ban kinh phai lon hon 0");
            }
            break;
        case 3:
            let dai = Number(prompt("moi ban nhap so dai"));
            let rong = Number(prompt("moi ban nhap so rong "));
            if (dai > 0 && rong > 0) {
                alert(`dien tich hinh chu nhat la : ${Rectangular(dai, rong).toFixed(2)}`);
            } else {
                alert("Chiều dài và chiều rộng phải lớn hơn 0!");
            }
            break;
        case 4:
            let Dai = Number(prompt("moi ban nhap so dai"));
            let Rong = Number(prompt("moi ban nhap so rong"));
            if (Dai > 0 && Rong > 0) {
                alert(`dien tich hinh chu nhat la : ${Rectangular(Dai, Rong).toFixed(2)}`);
            } else {
                alert("Chiều dài và chiều rộng phải lớn hơn 0!");
            }
            break;
        case 5:
            alert("C U T");
            break;
        default:
            break;
    }
} while (choice !== 5);