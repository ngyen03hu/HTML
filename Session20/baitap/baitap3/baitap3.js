let number = prompt("Mời bạn nhập số:");

if (isNaN(number)) { // Kiểm tra nếu không phải số
    alert("Bạn phải nhập một số!");
} else {
    let str = number.toString(); // Chuyển số thành chuỗi
    let isPalindrome = true; // Giả sử số này là đối xứng

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            isPalindrome = false; // Nếu có ký tự không khớp, đặt thành false
            break; // Dừng vòng lặp ngay khi phát hiện không đối xứng
        }
    }

    if (isPalindrome) {
        alert("Đây là số đối xứng!");
    } else {
        alert("Đây không phải là số đối xứng!");
    }
}
