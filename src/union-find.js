'use strict';

var u = require('underscore');

/**
 * @namespace
 */
var UnionFind = {

};

/**
 *
 * @param n - number of items
 * @constructor
 */
UnionFind.QuickFind = function(n) {
    this.itemsMap = u.range(n);
};

module.exports = UnionFind;