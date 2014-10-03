'use strict';

var ufNS = require('../src/union-find');

var solver = new ufNS.QuickFind(10);

solver.union(2, 4);
console.log(solver.itemsMap);
solver.union(4, 7);
console.log(solver.itemsMap);
