let number = Number(prompt("mời bạn nhập vào giá trị cần chuyển sang dạng chữ từ 0=>999"));

let hundred = Math.floor(number / 100);
let dozen = Math.floor((number % 100) / 10);
let unit = number % 10;
if (number > 0 && number < 1000) {
    switch (hundred) {
        case 1:
            hundred = "một trăm";
            break;
        case 2:
            hundred = "hai trăm";
            break;
        case 3:
            hundred = "ba trăm";
            break;
        case 4:
            hundred = "bốn trăm";
            break;
        case 5:
            hundred = "năm trăm";
            break;
        case 6:
            hundred = "sáu trăm";
            break;
        case 7:
            hundred = "bảy trăm";
            break;
        case 8:
            hundred = "tám trăm";
            break;
        case 9:
            hundred = "chín trăm";
            break;

        default:
            break;
    }
    switch (dozen) {
        case 0:
            dozen = "linh";
            break;
        case 1:
            dozen = "mười";
            break;
        case 2:
            dozen = "hai mươi";
            break;
        case 3:
            dozen = "ba mươi";
            break;
        case 4:
            dozen = "bốn mươi";
            break;
        case 5:
            dozen = "năm mươi";
            break;
        case 6:
            dozen = "sáu mươi";
            break;
        case 7:
            dozen = "bảy mươi";
            break;
        case 8:
            dozen = "tám mươi";
            break;
        case 9:
            dozen = "chín mươi";
            break;

        default:
            break;
    }
    switch (unit) {
        case 1:
            unit = "một";
            break;
        case 2:
            unit = "hai";
            break;
        case 3:
            unit = "ba";
            break;
        case 4:
            unit = "bốn";
            break;
        case 5:
            unit = "năm";
            break;
        case 6:
            unit = "sáu";
            break;
        case 7:
            unit = "bảy";
            break;
        case 8:
            unit = "tám";
            break;
        case 9:
            unit = "chín";
            break;

        default:
            break;
    }
    alert(`${hundred} ${dozen} ${unit}`);
} else {
    alert("lỗi cú pháp");
}