let sum = 0
let sochan = 0;
let sole = 0;
for (let i = 0; i < 5; i++) {
    let number = Number(prompt("moi ban nhap 5 so :"));

    if (!isNaN(number)) {
        if (number % 2 == 0) {
            sochan++;
        } else {
            sole++;
        }

    } else {
        alert("k phai so");
    }

}
alert(`so le la : ${sole}`);
alert(`so chan la : ${sochan}`);