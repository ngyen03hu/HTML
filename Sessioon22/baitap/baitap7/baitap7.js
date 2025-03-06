let arr = [10, 5, 6, 8, 5, 3, 5, 9, 3, 7];
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }

    }
}

for (let i = 0; i < arr.length; i++) {
    alert(arr);
}