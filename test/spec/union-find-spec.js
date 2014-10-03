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

describe('quick-union', function() {
    it('should initialize during construction', function() {
        var solver = new ufNS.QuickUnion(10);
        expect(solver.itemsMap).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should union items', function() {
        var solver = new ufNS.QuickUnion(10);
        solver.union(5, 6);
        var result = solver.connected(5, 6);
        expect(result).toBe(true);
    });

    it('should union items transitively', function() {
        var solver = new ufNS.QuickUnion(10);
        solver.union(5, 6);
        solver.union(6, 7);
        var result = solver.connected(5, 7);
        expect(result).toBe(true);
    });

    it('should union connected items by uniting their tree-tops', function() {
        var solver = new ufNS.QuickUnion(10);
        solver.union(5, 6);
        solver.union(6, 7);
        var root5 = solver.find(5);
        expect(root5).toBe(7);

        solver.union(1, 2);
        solver.union(2, 3);
        var root1 = solver.find(1);
        expect(root1).toBe(3);
        solver.union(1, 5);

        root1 = solver.find(1);
        expect(root1).toBe(7);
    });
});

describe('weighted-quick-union', function() {
    it('should initialize during construction', function() {
        var solver = new ufNS.WeightedQuickUnion(10);
        expect(solver.itemsMap).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should union items', function() {
        var solver = new ufNS.WeightedQuickUnion(10);
        solver.union(5, 6);
        var result = solver.connected(5, 6);
        expect(result).toBe(true);
    });

    it('should union items transitively', function() {
        var solver = new ufNS.WeightedQuickUnion(10);
        solver.union(5, 6);
        solver.union(6, 7);
        var result = solver.connected(5, 7);
        expect(result).toBe(true);
    });

    it('should make smaller root to point larger one', function() {
        var solver = new ufNS.WeightedQuickUnion(10);
        solver.union(5, 6);
        solver.union(5, 7);
        var root7 = solver.find(7);
        expect(root7).toBe(5);
    });
});
