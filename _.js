let _ = {
    clamp(num, minBound, maxBound) {
        let minClamped = Math.max(num, minBound);
        let clamped = Math.min(minClamped, maxBound);
        return Math.min(minClamped, clamped);
    }
};

console.log(_.clamp(0,1,3));
console.log(_.clamp(1,2,4));
console.log(_.clamp(5,2,4));


// Do not write or modify code below this line.
module.exports = _;