let date1 = prompt("Moi ban nhap 1 YYYY-MM-DD");
let date2 = prompt("Moi ban nhap 2 YYYY-MM-DD");


let sumdate = Math.abs(new Date(date1) - new Date(date2)) / (1000 * 60 * 60 * 24);


alert(sumdate);
