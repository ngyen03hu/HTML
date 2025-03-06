let arr = [];
let sochan = 0;
let sole = 0;

for (let i = 0; i < 5; i++) {
    arr.push(prompt("Nhập vào một số bất kỳ"));
    arr[i] = Number(arr[i]);
    if (!isNaN(arr[i])) {
        if (arr[i] % 2 == 0) {
            sochan += arr[i];
        } else {
            sole += arr[i];
        }

    } else {
        alert("k phai so");
    }

}
alert(`so le la : ${sole}`);
alert(`so chan la : ${sochan}`);