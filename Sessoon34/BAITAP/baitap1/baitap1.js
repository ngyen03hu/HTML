
//  tạo mảng chứa danh sách người đăng ký
let users = JSON.parse(localStorage.getItem("users")) || [];
function register() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmpassword").value;

    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("ds").innerHTML = `<i class="fa-solid fa-x"></i>`;
        alert("Email không hợp lệ. Vui lòng nhập email đúng định dạng.");
        return;
    } else {
        document.getElementById("ds").innerHTML = `<i class="fa-solid fa-check"></i>`;
    }

    // Kiểm tra mật khẩu có trùng khớp hay không
    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không trùng khớp.");
        return;
    }

    // Kiểm tra email đã tồn tại hay chưa
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let isEmailExist = users.some(user => user.email === email);

    if (isEmailExist) {
        alert("Email đã được đăng ký.");
        return;
    }

    // Lưu tài khoản mới vào localStorage
    let newUser = {
        id: Math.floor(Math.random() * 65656566),
        email: email,
        password: password
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");
    // Chuyển sang trang đăng nhập (nếu có)
    window.location = "./login.html";
}