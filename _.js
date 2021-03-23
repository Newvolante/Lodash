let _ = {
    clamp(num, minBound, maxBound) {
        if (num > minBound && num < maxBound) return num;
        if (num < minBound && num < maxBound) return minBound;
        if (num > minBound && num > maxBound) return maxBound;
    }
};

console.log(_.clamp(3,2,4));
console.log(_.clamp(1,2,4));
console.log(_.clamp(5,2,4));


// Do not write or modify code below this line.
module.exports = _;