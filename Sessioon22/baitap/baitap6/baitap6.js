let arr = [2, 5, 6, 8, 5, 3, 5, 6, 9, 3, 7];

for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            count++;
        }
    }
    if (count > 1) {
        console.log(`Phần tử ${arr[i]} xuất hiện ${count} lần`);

    }
}

