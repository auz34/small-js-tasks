'use strict';

var ufNS = require('../src/union-find');

console.log('============================ Quick-Find =============================');
var quickFind = new ufNS.QuickFind(10);

// 0-2 0-9 6-5 9-8 7-4 8-4
quickFind.union(0, 2);
quickFind.union(0, 9);
quickFind.union(6, 5);
quickFind.union(9, 8);
quickFind.union(7, 4);
quickFind.union(8, 4);
console.log(quickFind.itemsMap);

console.log('============================ Quick-Union =============================');
var quickUnion = new ufNS.QuickUnion(10);

quickUnion.union(2, 4);
quickUnion.union(4, 7);

quickUnion.union(1, 2);
quickUnion.union(2, 3);
console.log(quickUnion.itemsMap);

console.log('============================ Weighted Quick-Union =============================');
var weightedQuickUnion = new ufNS.WeightedQuickUnion(10);

// 4-3 3-8 6-2 0-8 7-9 3-5 2-9 6-8 6-1
weightedQuickUnion.union(4, 3);
weightedQuickUnion.union(3, 8);
weightedQuickUnion.union(6, 2);
weightedQuickUnion.union(0, 8);
weightedQuickUnion.union(7, 9);
weightedQuickUnion.union(3, 5);
weightedQuickUnion.union(2, 9);
weightedQuickUnion.union(6, 8);
weightedQuickUnion.union(6, 1);


console.log(weightedQuickUnion.itemsMap);