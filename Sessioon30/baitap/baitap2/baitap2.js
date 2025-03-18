let choice;
let cart = [];
let books = [
    {
        id: 1,
        name: "Đắc Nhân Tâm",
        price: 20000,
        quantity: 20,
        category: "Kỹ năng sống, phát triển bản thân",
    },
    {
        id: 2,
        name: "Nhà Giả Kim",
        price: 80000,
        quantity: 21,
        category: "Tiểu thuyết, lọc",
    },
    {
        id: 3,
        name: "Bí Mật Của Naoko",
        price: 40000,
        quantity: 15,
        category: "Trinh tiết, tâm lý",
    },
    {
        id: 4,
        name: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
        price: 60000,
        quantity: 30,
        category: "Tiểu thuyết, văn học Việt Nam",
    },
];
do {
    choice = Number(prompt(`
        1.Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).
        2.Thêm sách mới vào kho
        3.Tìm kiếm sách theo tên hoặc id.
        4.Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
        5.Sắp xếp sách theo giá:
                a.Tăng dần.
                b.Giảm dần.
        6.Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
        7.Hiển thị tổng số lượng sách trong kho.
        8.Thoát chương trình.
        `));
    switch (choice) {
        case 1:
            showBook();
            break;
        case 2:
            addBooks();
            break;
        case 3:
            searchBook();
            break;
        case 4:
            buyBooks();
            break;
        case 5:
            bookSotr();
            break;
        case 6:
            sumBook();
            break;
        case 7:
            displayTotalBooksInStock(books);
            break;
        case 8:
            alert("cut")
            break;
        default:
            alert("C U T");
            break;
    }
} while (choice !== 8);
function showBook() {
    let category = prompt(`Mời bạn nhập thể loại sách 
        Kỹ năng sống, phát triển bản thân
        Tiểu thuyết, lọc
        Trinh tiết, tâm lý
        `);
    let fitelBooks = books.filter(books => books.category.toLowerCase() === category.toLowerCase());

    if (fitelBooks.length === 0) {
        console.log("không có sách thể lạoi nay trong sách");
    } else {
        console.log("sah co trong the laoi nay ");
        fitelBooks.forEach(books =>
            console.log(`ID: ${books.id}, Tên: ${books.name}, Giá: ${books.price}, Số lượng: ${books.quantity}`)
        );
    }
}
function addBooks() {
    let id = Math.floor(Math.random() * 10000);
    let name = prompt("Mời bạn nhập tên sách");
    let price = prompt("Mời bạn nhập giá tiềntiền sách");
    let quantity = prompt("Mời bạn nhập số lươnglươngsách");
    let category = prompt("Mời bạn nhập thể loạiloại sách");

    books.push({ id, name, price, quantity, category });
    console.log(`Danh sách đã được thêm mới thành công ! ${id}`);
} function searchBook() {
    let searchType = Number(prompt(`
        Mời bạn nhập lựa chọn 
        1. tìm kiêm theo tên 
        2.tìm kiếm theo id 
        `));
    if (searchType === 1) {
        let search_name_book = prompt("Mời bạn nhập tên sách để tim");
        let foundBooks = books.filter(book => book.name.toLowerCase().includes(search_name_book.toLowerCase()));
        console.log(foundBooks.length ? foundBooks : "Không tìm thấy sách.");
    } else if (searchType === 2) {
        let id = prompt("Mời bạn nhập id sách để tim");
        let foundBook = books.find(book => book.id === id);
        console.log(foundBook ? foundBook : "Không tìm thấy sách.");
    } else {
        console.log("Lựa chọn không hợp lệ.");
    }
}


function buyBooks() {
    let bookId = Number(prompt("MỜI bạn nhập id muốn tìm sản phẩm"));
    let book = books.find(book => book.id === bookId);
    if (!book) {
        alert("Sản phẩm không có trong cửa hàng.");
        return;
    }
    let quantity = Number(prompt(`MỜI bạn nhập số lượng muốn mua (có sẵn ${book.quantity})`));
    if (book.quantity < quantity) {
        alert("Sản phẩm không đủ số lượng để mua.");
    } else {
        book.quantity -= quantity;
        cart.push({ book, quantity });
        alert("Sản phẩm đã được thêm vào giỏ hàng.");
    }
}


function bookSotr() {
    let sortBooks = Number(prompt(`Mời bạn nhập muốn sắp xếp 
        1.tăng
        2.giảm `));
    if (sortBooks === 1) {
        books.sort((a, b) => a.price - b.price);
    } else if (sortBooks === 2) {
        books.sort((a, b) => b.price - a.price);
    }
    console.log("so luong sau khi sap xep");
    console.log(books);
}

function sumBook() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].book.price * cart[i].quantity;
    }
    alert(`Tổng số tiền thanh toán là ${total} VNĐ`);
}
function displayTotalBooksInStock(books) {

    let total = books.reduce((sum, book) => sum + book.quantity, 0);
    console.log(`Tổng số lượng sách trong kho: ${total}`);
}
