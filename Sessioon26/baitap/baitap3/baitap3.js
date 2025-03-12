let case1 = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];
let case2 = [];
let case3 = "dfghjkl;"

function chenkEmail(arr) {
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            console.log("du lieu khonng hop le <br>");
            return;
        }
        let email = arr.filter((item) => {
            return typeof item === "string" && item.includes("@") && !item.includes(" ");

        })
        console.log(email);
    } else {
        console.log("du lieu khong hop le <br>");
    }
}
chenkEmail(case1);
chenkEmail(case2);
chenkEmail(case3);