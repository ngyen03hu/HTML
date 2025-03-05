let sum = 0;

for (let i = 0; i < 5; i++) {
    let number = Number(prompt(`nhap so nguyen to ${i + 1}`));
    if (!isNaN(number)) {
        if (number % 2 !== 0) {
            sum += number;
        }
    } else {
        alert("du lieu khong hop le");
    }
}
alert(`tong cac so le ${sum}`);
