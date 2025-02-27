let r = prompt("Moi nhap ban kinh :");

let sum_shape_volume = (4 / 3) * Math.PI * r * r * r;
document.write("<br>thể tích hình cầu : " + sum_shape_volume.toFixed(2));

let sum_Surface_area = 4 * Math.PI * Math.pow(r, 2);
document.write("<br>Diện tích bề mặt : " + sum_Surface_area.toFixed(2));

let sum_Perimeter = 2 * Math.PI * r;
document.write("<br>Chu vi lớn nhất của hình cầu " + sum_Perimeter.toFixed(2));