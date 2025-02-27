let money = prompt("Người dùng nhập vào số tiền gửi(vi-Vn)");
let moth = prompt("Người dùng nhập vào số tháng gửi");

money = Number(money);
moth = Number(moth);

let laixuat = 0.0043;

let laixuatthang = laixuat / 12;

let laixuatnhanduoc = moth * laixuatthang * money;

alert(laixuatnhanduoc);