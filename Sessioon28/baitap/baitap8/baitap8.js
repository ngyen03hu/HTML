// Danh sách nhân viên
let employees = [];

// Tìm ID lớn nhất hiện tại (tự tăng ID)
function generateNewId() {
    let maxId = 0;
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id > maxId) {
            maxId = employees[i].id;
        }
    }
    return maxId + 1;
}

// Thêm nhân viên mới
function addEmployee(name, position, salary) {
    let newId = generateNewId(); // Lấy ID mới
    let newEmployee = { id: newId, name: name, position: position, salary: salary };
    employees.push(newEmployee);
    console.log("Nhân viên mới đã được thêm:", newEmployee);
}

// Xóa nhân viên theo ID
function deleteEmployeeById(id) {
    let indexToDelete = -1;
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            indexToDelete = i;
            break;
        }
    }
    if (indexToDelete !== -1) {
        let confirmDelete = confirm(`Bạn có chắc chắn muốn xóa nhân viên ${employees[indexToDelete].name}?`);
        if (confirmDelete) {
            employees.splice(indexToDelete, 1);
            console.log("Nhân viên đã bị xóa.");
        }
    } else {
        console.log("Không tìm thấy nhân viên với ID này.");
    }
}

function updateSalaryById(id, newSalary) {
    let found = false;
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            employees[i].salary = newSalary;
            found = true;
            console.log("Cập nhật lương thành công cho nhân viên:", employees[i]);
            break;
        }
    }
    if (!found) {
        console.log("Không tìm thấy nhân viên với ID này.");
    }
}

function searchEmployeeByName(name) {
    let results = [];
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].name.toLowerCase().includes(name.toLowerCase())) {
            results.push(employees[i]);
        }
    }
    if (results.length > 0) {
        console.log("Nhân viên tìm thấy:", results);
    } else {
        console.log("Không tìm thấy nhân viên nào với tên này.");
    }
}

function displayEmployees() {
    if (employees.length > 0) {
        console.log("Danh sách nhân viên:");
        for (let i = 0; i < employees.length; i++) {
            console.log(`ID: ${employees[i].id}, Name: ${employees[i].name}, Position: ${employees[i].position}, Salary: ${employees[i].salary}`);
        }
    } else {
        console.log("Hiện không có nhân viên nào.");
    }
}

function showMenu() {
    let choice;
    do {
        choice = parseInt(prompt(`
            MENU QUẢN LÝ NHÂN VIÊN
            1. Thêm nhân viên
            2. Xóa nhân viên theo ID
            3. Cập nhật lương theo ID
            4. Tìm kiếm nhân viên theo tên
            5. Hiển thị danh sách nhân viên
            0. Thoát
            Nhập lựa chọn của bạn:
        `));

        switch (choice) {
            case 1:
                let name = prompt("Nhập tên nhân viên:");
                let position = prompt("Nhập chức vụ:");
                let salary = parseFloat(prompt("Nhập lương:"));
                addEmployee(name, position, salary);
                break;
            case 2:
                let deleteId = parseInt(prompt("Nhập ID của nhân viên cần xóa:"));
                deleteEmployeeById(deleteId);
                break;
            case 3:
                let updateId = parseInt(prompt("Nhập ID của nhân viên cần cập nhật lương:"));
                let newSalary = parseFloat(prompt("Nhập mức lương mới:"));
                updateSalaryById(updateId, newSalary);
                break;
            case 4:
                let searchName = prompt("Nhập tên nhân viên cần tìm:");
                searchEmployeeByName(searchName);
                break;
            case 5:
                displayEmployees();
                break;
            case 0:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ!");
        }
    } while (choice !== 0);
}

// Chạy chương trình
showMenu();
