'use strict';

var ufNS = require('../../src/union-find');

describe('quick-find', function() {
    it('should initialize during construction', function() {
        var solver = new ufNS.QuickFind(10);
        expect(solver.itemsMap).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});
