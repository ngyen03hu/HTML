let a = Number(prompt("Mời bạn nhập độ dài cạnh thứ nhất :"));
let b = Number(prompt("Mời bạn nhập độ dài cạnh thứ Hai :"));
let c = Number(prompt("Mời bạn nhập độ dài cạnh thứ BA :"));


if (a + b > c && a + c > b && b + c > a) {
    if (a == b && b == c) {
        alert("tam giác đều");
    } else if (a == b || a == c || b == c) {
        alert("tam giác cân");
    } else if (c * c == a * a + b * b || a * a == b * b + c * c || b * b == a * a + c * c) {
        alert("tam giác vuôngvuông")
    } else {
        alert("tam giác thường");
    }
} else {
    alert("ba cạnh nay k tạo ra đc tam giácgiác")
}