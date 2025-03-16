function splitArrayIntoChunks(array, chunkSize) {
    let result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        let chunk = array.slice(i, i + chunkSize);
        result.push(chunk);
    }
    return result;
}
let myArray = [1, 2, 3, 4, 5, 6, 7, 8];
let chunkSize = 3;
let result = splitArrayIntoChunks(myArray, chunkSize);
console.log(result);
