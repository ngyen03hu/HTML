for (let num = 100; num < 1000; num++) {
    let digits = num.toString().split('');
    let sumOfCubes = digits.reduce((sum, digit) => sum + Math.pow(parseInt(digit), 3), 0);
    if (sumOfCubes === num) {
        console.log(num);
    }
}
