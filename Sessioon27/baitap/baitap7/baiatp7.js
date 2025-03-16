function findMissingNumber(array) {
    const n = array.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = array.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

const array = [1, 2, 3, 5];
const missingNumber = findMissingNumber(array);
console.log(missingNumber); 
