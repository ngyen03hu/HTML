let case1 = [10, 9, 5, 11, 24, 5];
let case2 = [];
let case3 = "werty";

function maxIndex(input) {
    if (Array.isArray(input)) {
        if (input.length == 0) {
            console.log("mang rong");
            return;

        }
        let max = Math.max(...input)
        let index = input.indexOf(max);

        console.log(`max ${max}`);
        console.log(`index : ${index}`);


    } else {
        console.log("du lieu khong hop le");

    }
}
maxIndex(case1);
maxIndex(case2);
maxIndex(case3);