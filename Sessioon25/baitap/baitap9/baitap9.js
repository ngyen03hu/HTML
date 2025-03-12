let users = ["Vuong03032006@gamil.com"];
let email = prompt("moi ban nhap email");

function registerEmail(email) {
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|vn)$/;
    return isValidEmail.test(email);
}
function log_in_email(email, arr) {
    if (!registerEmail(email)) {
        alert("Email không hợp lệ");
        return;
    } else if (users.includes(email)) {
        alert("tài khoản đã tồn tại");
    } else {
        arr.push(email);
        alert("tài khoản đc đăng kí thành công");
    }
}
log_in_email(email, users);