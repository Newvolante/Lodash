let _ = {
    clamp(num, minBound, maxBound) {
        let minClamped = Math.max(num, minBound);
        let clamped = Math.min(minClamped, maxBound);
        return Math.min(minClamped, clamped);
    },
    inRange(num, start, end) {
        if (!end) {
            end = start;
            start = 0;
        } else if (start > end) {
            let temp = start;
            start = end;
            end = temp;
        }
        return (num >= start && num < end);
    }
};

// Do not write or modify code below this line.
module.exports = _;