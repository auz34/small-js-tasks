'use strict';

var dummy = require('../../src/dummy');

describe('calculation', function() {
    it('should sum arguments if both are even', function() {
        var result = dummy.calculate(6, 10);
        expect(result).toBe(16);
    });

    it('should subtract arguments if only second one is uneven', function() {
        var result = dummy.calculate(20, 7);
        expect(result).toBe(13);
    });

    it('should divide b on a when only first argument one is uneven', function() {
        var result = dummy.calculate(3, 6);
        expect(result).toBe(2);
    });

    it('should multiply arguments if both are uneven', function() {
        var result = dummy.calculate(7, 3);
        expect(result).toBe(21);
    });

    it('should return zero if one of the arguments is not an integer', function() {
        var result = dummy.calculate(7, '3');
        expect(result).toBe(0);
    });
});
