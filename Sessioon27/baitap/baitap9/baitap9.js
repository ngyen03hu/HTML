function evenArray(array) {
    if (Array.isArray(array)) {
        let evenArray = [];
        for (let i = 0; i < array.length; i++) {// lap qua cac phan tu 
            if (array[i] % 2 == 0) {// tim cac so chan 
                evenArray.push(array[i]);// put vao trong mang 
            }
        }
        for (let i = 0; i < evenArray.length - 1; i++) {
            for (let j = 0; j < evenArray.length - 1 - i; j++) { ////// lap qua de sap xep mang theo thu tu tang dan 
                if (evenArray[j] > evenArray[j + 1]) {
                    let temp = evenArray[j];
                    evenArray[j] = evenArray[j + 1];
                    evenArray[j + 1] = temp;
                }
            }
        }
        let enencout = 0;
        for (let i = 0; i < array.length; i++) {///// tinh cac thu tu so chan sap xep so chan 
            if (array[i] % 2 == 0) {
                array[i] = evenArray[enencout];
                enencout++;
            }
        }
        alert(array);
    } else {
        alert("du lieu khong hop le");
    }

}
evenArray([5, 8, 6, 3, 4, 2, 7]);