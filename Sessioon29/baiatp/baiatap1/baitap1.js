// Xây dựng ứng dụng  quản lý danh bạ, mỗi đối tượng “Contact” bao gồm các thuộc tính:

// id(số nguyên): Định danh duy nhất cho mỗi liên hệ.

//     name(string): Tên của người liên hệ.

//         email(string): Email của người liên hệ.

//             phone(string): Số điện thoại của người liên hệ.

// Các chức năng:

// Thêm đối tượng Contact vào danh sách liên hệ.
// Hiển thị danh sách danh bạ.
// Tìm kiếm thông tin Contact theo số điện thoại.
// Cập nhật thông tin Contact(name, email, phone) theo id.
// Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
//     Thoát.

let choice;
do {

    choice = Number(prompt(`
        1.Thêm đối tượng Contact vào danh sách liên hệ.
        2.Hiển thị danh sách danh bạ.
        3.Tìm kiếm thông tin Contact theo số điện thoại.
        4.Cập nhật thông tin Contact(name, email, phone) theo id.
        5.Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
        6.Thoát.
        `));
    switch (choice) {
        case 1:

            break;

        default:
            break;
    }

} while (choice !== 6);

function addContact() {
    let name = prompt("Nhập tên:");
    let email = prompt("Nhập email:");
    let phone = prompt("Nhập số điện thoại:");

    let newContact = new Contact(nextId++, name, email, phone);
    con
}
