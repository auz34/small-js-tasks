'use strict';

var ufNS = require('../../src/union-find');

describe('quick-find', function() {
    it('should initialize during construction', function() {
        var solver = new ufNS.QuickFind(10);
        expect(solver.itemsMap).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should union items', function() {
        var solver = new ufNS.QuickFind(10);
        solver.union(5, 6);
        var result = solver.connected(5, 6);
        expect(result).toBe(true);
    });

    it('should union items transitively', function() {
        var solver = new ufNS.QuickFind(10);
        solver.union(5, 6);
        solver.union(6, 7);
        var result = solver.connected(5, 7);
        expect(result).toBe(true);
    });
});
