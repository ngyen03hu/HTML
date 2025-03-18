let choice;
let cart = [];
let phoneList = [
    { id: 1, name: "15 Pro Max", price: 34990000, quantity: 20, company: "iPhone" },
    { id: 2, name: "Galaxy S24 Ultra", price: 32990000, quantity: 21, company: "Samsung" },
    { id: 3, name: "14 Pro", price: 19990000, quantity: 15, company: "Xiaomi" },
    { id: 4, name: "Find X6 Pro", price: 18990000, quantity: 30, company: "OPPO" }
];

do {
    choice = Number(prompt(`
        1. Hiển thị danh sách điện thoại theo hãng(Ví dụ: Samsung, Apple, Xiaomi…)
        2, Thêm điện thoại mới vào cửa hàng(Nhập thông tin: id, tên điện thoại, giá, số lượng, hãng)
        3. Tìm kiếm điện thoại theo tên hoặc id
        4. Mua điện thoại(Nhập id điện thoại cần mua và số lượng, cập nhật lại cửa hàng)
        5. Thanh toán tất cả điện thoại trong giỏ hàng(Thông báo thanh toán thành công, và xóa toàn bộ giỏ hàng)
        6. Sắp xếp điện thoại theo giá:
                    1.Tăng dần
                    2.Giảm dần
        7. Hiển thị tổng số tiền của các điện thoại trong kho
        8. Hiển thị tổng số lượng điện thoại theo từng hàng(VD: samsung - 5, iphone - 3, ...)
        9. Thoát chương trình
    `));

    switch (choice) {
        case 1:
            let companyName = prompt("Nhập tên hãng muốn xem:");
            showPhones(companyName);
            break;
        case 2:
            addPhone();
            break;
        case 3:
            searchPhone();
            break;
        case 4:
            buyPhone();
            break;
        case 5:
            sumPhone();
            break;
        case 6:
            phoneSort();
            break;
        case 7:
            displayTotalPhoneValue();
            break;
        case 8:
            getTotalPhonesByCompany();
            break;
        case 9:
            alert("C Ut ")
            break;

        default:
            alert("Lựa chọn không hợp lệ.");
    }
} while (choice !== 9);

function showPhones(companyName) {
    let foundPhones = phoneList.filter(p => p.company.toLowerCase() === companyName.toLowerCase().trim());
    if (foundPhones.length === 0) {
        console.log(`Không có điện thoại nào thuộc hãng ${companyName}.`);
    } else {
        console.log(`Danh sách điện thoại của hãng ${companyName}:`);
        foundPhones.forEach(p => console.log(`- ${p.name} (ID: ${p.id}, Giá: ${p.price.toLocaleString()} VNĐ, Số lượng: ${p.quantity})`));
    }
}

function addPhone() {
    let id = Math.floor(Math.random() * 10000);
    let name = prompt("Nhập tên điện thoại:");
    let price = Number(prompt("Nhập giá điện thoại:"));
    let quantity = Number(prompt("Nhập số lượng:"));
    let company = prompt("Nhập hãng:");

    if (!name || isNaN(price) || isNaN(quantity) || !company) {
        alert("Thông tin không hợp lệ.");
        return;
    }

    phoneList.push({ id, name, price, quantity, company });
    console.log(`Thêm điện thoại thành công! ID: ${id}`);
}

function searchPhone() {
    let searchType = Number(prompt("Tìm kiếm theo: 1. Tên | 2. ID"));
    if (searchType === 1) {
        let searchName = prompt("Nhập tên điện thoại:");
        let foundPhones = phoneList.filter(p => p.name.toLowerCase().includes(searchName.toLowerCase()));
        console.log(foundPhones.length ? foundPhones : "Không tìm thấy điện thoại.");
    } else if (searchType === 2) {
        let id = Number(prompt("Nhập ID điện thoại:"));
        let foundPhone = phoneList.find(p => p.id === id);
        console.log(foundPhone ? foundPhone : "Không tìm thấy điện thoại.");
    } else {
        alert("Lựa chọn không hợp lệ.");
    }
}

function buyPhone() {
    let phoneId = Number(prompt("Nhập ID sản phẩm cần mua:"));
    let selectedPhone = phoneList.find(p => p.id === phoneId);
    if (!selectedPhone) {
        alert("Sản phẩm không có trong cửa hàng.");
        return;
    }

    let quantity = Number(prompt(`Nhập số lượng muốn mua (có sẵn ${selectedPhone.quantity}):`));
    if (isNaN(quantity) || quantity <= 0) {
        alert("Số lượng không hợp lệ.");
        return;
    }

    if (selectedPhone.quantity < quantity) {
        alert("Không đủ hàng trong kho.");
        return;
    }

    selectedPhone.quantity -= quantity;
    cart.push({ id: selectedPhone.id, name: selectedPhone.name, quantity, price: selectedPhone.price });
    alert("Sản phẩm đã được thêm vào giỏ hàng.");
}
function sumPhone() {
    if (cart.length === 0) {
        alert("Giỏ hàng trống, không có gì để thanh toán.");
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    alert(`Tổng số tiền thanh toán là ${total.toLocaleString()} VNĐ`);

}

function phoneSort() {
    let sortPhone = Number(prompt(`Chọn cách sắp xếp giá:
        1. Tăng dần
        2. Giảm dần
    `));

    if (sortPhone === 1) {
        phoneList.sort((a, b) => a.price - b.price);
        console.log("Danh sách điện thoại sau khi sắp xếp tăng dần:");
    } else if (sortPhone === 2) {
        phoneList.sort((a, b) => b.price - a.price);
        console.log("Danh sách điện thoại sau khi sắp xếp giảm dần:");
    } else {
        alert("Lựa chọn không hợp lệ.");
        return;
    }

    phoneList.forEach(p => console.log(`- ${p.name} (ID: ${p.id}, Giá: ${p.price.toLocaleString()} VNĐ, Số lượng: ${p.quantity})`));
}


function displayTotalPhoneValue() {
    let totalValue = phoneList.reduce((sum, phone) => sum + phone.price * phone.quantity, 0);

    console.log(`Tổng giá trị của tất cả điện thoại trong kho: ${totalValue.toLocaleString()} VNĐ`);
}


function getTotalPhonesByCompany() {
    let counts = {};
    for (let i = 0; i < phone.length; i++) {
        const company = phone[i].company.trim().toLowerCase();
        if (counts[company]) {
            counts[company] += phone[i].quantity;
        } else {
            counts[company] = phone
        }
    }
}