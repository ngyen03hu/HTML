let hour = Number(prompt("Mời bạn nhập giờ :"));
let minutes = Number(prompt("Mời bạn nhập phút :"));
let shoes = Number(prompt("MỜi bạn nhập giây :"));

let sum = (hour - 12) >= 0 ? "PM" : "AM";

alert(` ${Math.abs(hour - 12)} : ${minutes} : ${shoes} : ${sum}`);