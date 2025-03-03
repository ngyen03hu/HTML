let a = Number(prompt("mmoi ban nhap so a "));
let b = Number(prompt("mmoi ban nhap so b "));
let c = Number(prompt("mmoi ban nhap so c "));

// 2 *ax^2+bx+c=0.
let deta = Math.pow(b, 2) - 4 * a * c;

if (deta > 0) {
    let x1 = (-b + Math.sqrt(deta)) / (2 * a);
    let x2 = (-b - Math.sqrt(deta)) / (2 * a);
    alert(`Phương trình có hai nghiệm phân biệt:
         x1 = ${x1}
         x2 = ${x2}`);
} else if (deta == 0) {
    let x = -b / (a * 2);
    alert(`Phương trình có nghiệm kép 
        x1=x2 = ${x} `);
} else {
    alert("Phương trình vô nghiệm thực");
}

