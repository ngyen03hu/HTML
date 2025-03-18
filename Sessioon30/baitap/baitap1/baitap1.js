let cart = [];
let choice;
let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    },
];
do {
    choice = Number(prompt(`
        1. Hiển thị các sản phẩm theo tên danh mục.
        2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
            a. Sản phẩm không có trong cửa hàng hiển thị thông báo.
            b. Sản phẩm có trong cửa hàng
                i. Cho người dùng nhập số lượng sản phẩm muốn mua, mua thành công số lượng sản phẩm trong cửa hàng sẽ bị trừ đi.
                ii. Số lượng sản phẩm trong cửa hàng = 0 hoặc không đủ hiển thị thông báo.
        3. Sắp xếp các sản phẩm trong cửa hàng theo giá:
                a. Tăng dần.
                b.Giảm dần.
        4.Tính số tiền thanh toán trong giỏ hàng.
        5.Thoát.
        `));
    switch (choice) {
        case 1:
            // hiem  thi san pham 
            showProducts();
            break;
        case 2:
            selectPronductsId(products);
            break;
        case 3:
            sortProducts();
            break;
        case 4:
            sumProducts();
            break;
        case 5:
            alert("thoat")
            break;

        default:
            alert("thoat");
            break;
    }
} while (choice !== 5);
function showProducts() {
    let productsDantoc = Number(prompt(`
        MỜi bạn nhập món ăn dân tộc ưa thích
        1.Món ăn dân tộc kinh
        2.MÓn ăn dân tộc Mông
        `));
    if (productsDantoc === 1) {
        let kinh = products.filter(product => product.category === "món ăn dân tộc Kinh");
        console.log(kinh);
    } else if (productsDantoc === 2) {
        let Mong = products.filter(product => product.category === "món ăn dân tộc Mông");
        console.log(Mong);
    } else {
        alert("Không có sản phẩm cho lựa chọn này.");
    }
}

function selectPronductsId(products) {
    let productId = Number(prompt("MỜI bạn nhập id muốn tìm sản phẩm"));
    let product = products.find(product => product.id === productId);
    if (!product) {
        alert("Sản phẩm không có trong cửa hàng.");
        return;
    }
    let quantity = Number(prompt(`MỜI bạn nhập số lượng muốn mua (có sẵn ${product.quantity})`));
    if (product.quantity < quantity) {
        alert("Sản phẩm không đủ số lượng để mua.");
    } else {
        product.quantity -= quantity;
        cart.push({ product, quantity });
        alert("Sản phẩm đã được thêm vào giỏ hàng.");
    }
}

function sortProducts() {
    let sortProduct = Number(prompt(`
        mời bạn nhập sắp xếp theo giá
        1.tăng dần
        2.giảm dần
        `));
    if (sortProduct === 1) {
        products.sort((a, b) => a.price - b.price);
    } else if (sortProduct === 2) {
        products.sort((a, b) => b.price - a.price);
    }
    console.log("so luong sau khi sap xep");
    console.log(products);
}
function sumProducts() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].product.price * cart[i].quantity;
    }
    alert(`Tổng số tiền thanh toán là ${total} VNĐ`);
}

