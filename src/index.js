module.exports = function reverse (n) {
    let absInt = Math.abs(n);
    let arrayInt = absInt.toString().split("");
    let arrayReverse = [];
    let reverseInt = 0;

    for (let i = 0; i < arrayInt.length; i++) {
        arrayReverse.unshift(arrayInt[i]);
    }

    reverseInt = Number(arrayReverse.join(""));
    return reverseInt;
}

