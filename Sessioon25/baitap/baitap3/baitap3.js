function chenkNUmber(array) {
    let arrayNew = [];
    if (Array.isArray(array)) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] % 2 == 0) {
                arrayNew.push(array[i]);
            }
        }
        arrayNew.length > 0 ? alert(`mang so chan la ${arrayNew}`) : alert("mang khong co so le");
    } else {
        alert("mang khong chua du lieu");
    }
}
chenkNUmber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);