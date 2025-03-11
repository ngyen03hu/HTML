function isPan() {
    let text = prompt("moi ban nhap ");
    let flag = 1;
    for (let i = 0; i < Math.floor(text.length / 2); i++) {
        if (text[i] != text[text.length - 1 - i]) {
            flag = 0;
            break;
        }
    }
    flag ? console.log("day la so doi xung ") : console.log("khong phai la so doi xung");
}
isPan();