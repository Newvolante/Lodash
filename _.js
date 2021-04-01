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
    pad(string, length) {   // pad("hi", 5);
        if (length < string.length) return string;
        let spacesToAdd = length - string.length;   // 5 - 2 = 3
        let startSpaces = ' '.repeat(Math.floor(spacesToAdd / 2)); // adds 1
        let endSpaces = ' '.repeat(length - string.length - startSpaces.length);  // 5 - 2 - 1
        return startSpaces + string + endSpaces;
    },
    has(obj, key) {
        return obj.hasOwnProperty(key);
    },
    invert(obj) {
        let newObj = {};

        for (let key in obj) {
            newObj[obj[key]] = key;
        }
        return newObj;
    },
    findKey(obj, predFunc) {
        for (let key in obj) {
            let value = obj.key;
            let predicateReturnValue = predFunc(value);
            if (predicateReturnValue) return key;
        }
        return undefined;
    },
    drop(arr, slots) {
        if (!slots) slots = 1;
        return arr.slice(slots, arr.length+1);
    }
};

// Do not write or modify code below this line.
module.exports = _;