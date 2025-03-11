function sum(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return a + b;
    }
    alert("khong phai so nguyen");
}
alert("tong 2 so la " + sum(5, 6));