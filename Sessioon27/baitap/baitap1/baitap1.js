let choice;
let a = Number(prompt("moi ban nhap so a"));
let b = Number(prompt("moi ban nhap so b"));
do {
    function sum(a, b) {
        return a + b;
    }
    function tru(a, b) {
        return a - b;
    }
    function nhan(a, b) {
        return a * b;
    }
    function chia(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Không thể chia cho 0!";
        }
    }

    choice = Number(prompt(`
        1.Cộng hai số.
        2.Trừ hai số.
        3.Nhân hai số.
        4.Chia hai số.
        5.Thoát. `));

    switch (choice) {
        case 1:
            alert(`tong 2 so ${sum(a, b)}`);
            break;
        case 2:
            alert(`tru la : ${tru(a, b)}`);
            break;
        case 3:
            alert(`tong 2 so nhan : ${nhan(a, b)}`);
            break;
        case 4:
            alert(`tong 2 so nhan : ${chia(a, b)}`);
            break;
        case 5:
            alert("cut nhanh ");
            break;
        default:
            alert("cut ");
            break;
    }
} while (choice !== 5);