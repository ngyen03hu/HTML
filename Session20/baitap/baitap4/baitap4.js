let str = prompt("Moi ban nhap chuoi bat ky ");

let search = prompt("moi ban nhap ky tu muon tim :");

for (let i = 0; i < str.length; i++) {
    if (str[i] == search) {
        alert("ton tai");
        break;
    } else {
        alert("khong ton tai ");
        break;
    }
}

