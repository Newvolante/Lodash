let _ = {
    clamp(num, minBound, maxBound) {
        switch(num) {
            case num < minBound:
                return minBound;
                break;
            case num > maxBound:
                return maxBound;
                break;
            default:
                return num;

        }
    }
};




// Do not write or modify code below this line.
module.exports = _;