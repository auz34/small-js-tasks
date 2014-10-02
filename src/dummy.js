'use strict';

function isInteger(x) {
    return (typeof x === 'number') && (x % 1 === 0);
}

exports.calculate = function(a, b) {
    if (!isInteger(a) || !isInteger(b)) {
        return 0;
    }

    var bitA = (a % 2 === 0) ? 0 : 1,
        bitB = (b % 2 === 0) ? 0 : 1;

    switch (2*bitA + bitB) {
        case 0: // both numbers are even
            return a + b;
        case 1: // only b is even number
            return a - b;
        case 2: // only a is even number
            return b / a;
        case 3: // both numbers are uneven
            return a * b;
    }
};


