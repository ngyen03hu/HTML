let a = prompt("Moi ban nhap so thu nhat:");
let b = prompt("Moi ban nhap so thu hai:");
let c = prompt("Moi ban nhap so thu ba:");

a = Number(a);
b = Number(b);
c = Number(c);


let deta = (Math.pow(b, 2)) - 4 * a * c;
let x1, x2;
if (deta > 0) {
    x1 = (-b + Math.sqrt(deta) / (2 * a));
    x2 = (-b - Math.sqrt(deta) / (2 * a));

}

alert(`x1 cua ban la : ${x1} `)
alert(`x2 cua ban la : ${x2} `)
