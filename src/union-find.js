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

u.extend(UnionFind.QuickFind.prototype, {
    /**
     * Returns true if two items are connected.
     * @param p number of the first item.
     * @param q number of the first item.
     * @returns {boolean}
     */
    connected: function(p, q) {
        return this.itemsMap[p] === this.itemsMap[q];
    },

    /**
     * Unions two items into one group
     * @param p
     * @param q
     */
    union: function(p, q) {
        if (this.connected(p, q)) {
            return;
        }

        var numToReplace = this.itemsMap[p];
        for (var i=0; i<this.itemsMap.length; i++) {
            if (this.itemsMap[i] === numToReplace) {
                this.itemsMap[i] = this.itemsMap[q];
            }
        }
    }
});

/**
 *
 * @param n - number of items
 * @constructor
 */
UnionFind.QuickUnion = function(n) {
    this.itemsMap = u.range(n);
};

u.extend(UnionFind.QuickUnion.prototype, {

    /**
     * Finds root of the tree which contains p.
     * @param p
     * @returns {*}
     */
    find: function(p) {
        while (p !== this.itemsMap[p]) {
            p = this.itemsMap[p];
        }

        return p;
    },

    /**
     * Returns true if two items are connected.
     * @param p number of the first item.
     * @param q number of the second item.
     * @returns {boolean}
     */
    connected: function(p, q) {
        return this.find(p) === this.find(q);
    },

    /**
     * Unions two items into one group
     * @param p
     * @param q
     */
    union: function(p, q) {
        var rootP = this.find(p),
            rootQ = this.find(q);

        if (rootP === rootQ) {
            return;
        }

        this.itemsMap[rootP] = rootQ;
    }
});

/**
 *
 * @param n - number of items
 * @constructor
 */
UnionFind.WeightedQuickUnion = function(n) {
    this.itemsMap = u.range(n);

    this.itemTreeSize = [];
    for (var i=0; i<n; i++) {
        this.itemTreeSize.push(1);
    }
};

u.extend(UnionFind.WeightedQuickUnion.prototype, {

    /**
     * Finds root of the tree which contains p.
     * @param p
     * @returns {*}
     */
    find: function(p) {
        while (p !== this.itemsMap[p]) {
            p = this.itemsMap[p];
        }

        return p;
    },

    /**
     * Returns true if two items are connected.
     * @param p number of the first item.
     * @param q number of the second item.
     * @returns {boolean}
     */
    connected: function(p, q) {
        return this.find(p) === this.find(q);
    },

    /**
     * Unions two items into one group
     * @param p
     * @param q
     */
    union: function(p, q) {
        var rootP = this.find(p),
            rootQ = this.find(q);

        if (rootP === rootQ) {
            return;
        }

        if (this.itemTreeSize[rootP] < this.itemTreeSize[rootQ]) {
            this.itemsMap[rootP] = rootQ;
            this.itemTreeSize[rootQ] += this.itemTreeSize[rootP];
        } else {
            this.itemsMap[rootQ] = rootP;
            this.itemTreeSize[rootP] += this.itemTreeSize[rootQ];
        }
    }
});


module.exports = UnionFind;