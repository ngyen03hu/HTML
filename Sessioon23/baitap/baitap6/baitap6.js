let arr = ["", false, 0, 5, 10, "Hello world!"];

let newarr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        newarr.push(arr[i]);
    }
}

alert(newarr);