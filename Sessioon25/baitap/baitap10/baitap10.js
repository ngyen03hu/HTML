let products = [
    ["DSQ2", 5, 5000],
    ["bánh mì", 12, 15000],
    ["bánh bao", 5, 8000],
    ["mèn mén", 30, 20000]
];
let cart = [];

function viewProducts() {
    alert("Danh sách sản phẩm:");
    for (let i = 0; i < products.length; i++) {
        alert(`${products[i][0]} - Số lượng: ${products[i][1]}, Giá: ${products[i][2]} VND`);
    }
}

function addToCart(productName) {
    let product = null;


    for (let i = 0; i < products.length; i++) {
        if (products[i][0] === productName) {
            product = products[i];
            break;
        }
    }

    if (!product) {
        alert("Sản phẩm không có trong cửa hàng.");
        return;
    }

    if (product[1] === 0) {
        alert(`Sản phẩm "${productName}" đã hết hàng.`);
        return;
    }

    product[1]--;
    let cartItem = null;


    for (let i = 0; i < cart.length; i++) {
        if (cart[i][0] === productName) {
            cartItem = cart[i];
            break;
        }
    }

    if (cartItem) {
        cartItem[1]++;
    } else {
        cart.push([productName, 1, product[2]]);
    }

    alert(`Bạn đã thêm "${productName}" vào giỏ hàng.`);
}

function calculateTotal() {
    let total = 0;
    alert("Hóa đơn:");

    for (let i = 0; i < cart.length; i++) {
        alert(`${cart[i][0]} - Số lượng: ${cart[i][1]}, Giá mỗi sản phẩm: ${cart[i][2]} VND`);
        total += cart[i][1] * cart[i][2];
    }

    alert(`Tổng tiền: ${total} VND`);
}

function shopping() {
    let exit = false;
    while (!exit) {
        let choice = prompt(`\nChọn hành động:
        1. Xem danh sách sản phẩm
        2. Mua sản phẩm
        3. Xem giỏ hàng và hóa đơn
        4. Thoát
       Nhập lựa chọn của bạn: `)

        switch (choice) {
            case "1":
                viewProducts();
                break;
            case "2":
                let productName = prompt("Nhập tên sản phẩm muốn mua: ");
                addToCart(productName);
                break;
            case "3":
                calculateTotal();
                break;
            case "4":
                exit = true;
                alert("Cảm ơn bạn đã mua sắm!");
                break;
            default:
                alert("Lựa chọn không hợp lệ. Vui lòng thử lại.");
        }
    }
}

shopping();
