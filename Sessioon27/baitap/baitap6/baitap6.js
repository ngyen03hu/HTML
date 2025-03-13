function splitArrayIntoChunks(array, chunkSize) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);
        result.push(chunk);
    }
    return result;
}

// Ví dụ sử dụng:
const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkSize = 3;
const result = splitArrayIntoChunks(myArray, chunkSize);
console.log(result);
// Kết quả: [[1, 2, 3], [4, 5, 6], [7, 8]]
