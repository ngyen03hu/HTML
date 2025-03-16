function isArithmeticSequence(array) {
    if (array.length < 2) {
        return false;
    }
    const difference = array[1] - array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] - array[i - 1] !== difference) {
            return false;
        }
    }
    return true;
}
const array1 = [2, 4, 6, 8];
const array2 = [1, 2, 4, 8];
console.log(isArithmeticSequence(array1));
console.log(isArithmeticSequence(array2)); 
