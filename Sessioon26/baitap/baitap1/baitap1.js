let case1 = [2, 45, 7, 8, 4, 7, 4, 6, 36, 3];
let case2 = [];
let case3 = "jksshjk"


function filterNumber(arr) {
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            console.log
                ("mang khong co gia tri ")
            return;
        }
        let result = arr.filter((item) => {
            return item >= 10;
        })
        console.log(result);
    } else {
        console.log("du lieu khong hop le");
    }
}
filterNumber(case1);
filterNumber(case2);
filterNumber(case3);