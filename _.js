let _ = {
    clamp(num, minBound, maxBound) {
        let minClamped = Math.max(num, minBound);
        let clamped = Math.min(minClamped, maxBound);
        return Math.min(minClamped, clamped);
    },
    inRange(num, start, end) {
        
    }
};

// Do not write or modify code below this line.
module.exports = _;