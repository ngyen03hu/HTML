let case1 = ["apple", "banana", "cat", "elephant", "dog"];
let case2 = [];
let case3 = "acsc";

function filterTile(arr) {
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            alert("mang khong co phan tu nao  ");
            return;
        }
        let length = arr.filter((item) => {
            return item.length >= 5;
        });
        alert(length);
    } else {
        alert("du lieu khong hop le");
    }
}
filterTile(case1);
filterTile(case2);
filterTile(case3);