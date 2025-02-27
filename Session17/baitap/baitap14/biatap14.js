let h = prompt("Moi ban nhap chieu cao cua hinh tru :");
let r = prompt("Moi ban nhap ban kinh cua hinh tru :");


let sum_around = 2 * Math.PI * h * r;
document.write(" diện tích xung quanh :" + sum_around.toFixed(2));

let sum_r = Math.PI * r * r;
let sum_whole = 2 * sum_r + sum_around;
document.write("<br>diện tích toàn phần :" + sum_whole.toFixed(2));

let sum_volume = sum_r * h;
document.write("<br>thể tích hình trụ :" + sum_volume.toFixed(2));

let sum_perimeter = 2 * Math.PI * r;
document.write("<br> chu vi đáy : " + sum_perimeter.toFixed(2));