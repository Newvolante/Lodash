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
        }
        if (start > end) {
            let temp = start;
            start = end;
            end = temp;
        }
        return (num >= start && num < end);
    }, words(str) {
        return str.split(' ');
    },
    pad(string, length) {
        if (length < string.length) return string;
        let stringToArr = string.split('');
        console.log(stringToArr);
        let spacesToAdd = length - string.length;
        let startSpaces = '';
        let endSpaces = '';

        let counter = spacesToAdd/2;

        if (spacesToAdd > 0) {
            for (let i = 0; i < counter; i++) {
                console.log("iteration for startSpaces:", i);
                startSpaces += ' ';
            }
            for (let i = 0; i < counter; i++) {
                console.log("iteration for endSpaces:", i);
                endSpaces += ' ';
            }
            if (counter % 2 != 0) endSpaces += " ";
            return startSpaces + stringToArr.join('') + endSpaces;
        }
    }
};

// console.log(_.pad("test", 6));
// console.log(_.pad("test", 7));

// Do not write or modify code below this line.
module.exports = _;