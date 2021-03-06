"use strict";
exports.__esModule = true;
/**
 * @module Utility
 */
var arrays = /** @class */ (function () {
    function arrays() {
    }
    arrays.toposort = function (edges) {
        return arrays._toposort(arrays._uniqueNodes(edges), edges);
    };
    arrays._uniqueNodes = function (arr) {
        var res = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            var edge = arr[i];
            if (res.indexOf(edge[0]) < 0)
                res.push(edge[0]);
            if (res.indexOf(edge[1]) < 0)
                res.push(edge[1]);
        }
        return res;
    };
    arrays._toposort = function (nodes, edges) {
        var cursor = nodes.length, sorted = new Array(cursor), visited = {}, i = cursor;
        while (i--) {
            if (!visited[i])
                visit(nodes[i], i, []);
        }
        return sorted;
        function visit(node, i, predecessors) {
            if (predecessors.indexOf(node) >= 0) {
                var nodeRep;
                try {
                    nodeRep = ", node was:" + JSON.stringify(node);
                }
                catch (e) {
                    nodeRep = "";
                }
                throw new Error("Cyclic dependency" + nodeRep);
            }
            if (!~nodes.indexOf(node)) {
                throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " +
                    JSON.stringify(node));
            }
            if (visited[i])
                return;
            visited[i] = true;
            // outgoing edges
            var outgoing = edges.filter(function (edge) {
                return edge[0] === node;
            });
            if ((i = outgoing.length)) {
                var preds = predecessors.concat(node);
                do {
                    var child = outgoing[--i][1];
                    visit(child, nodes.indexOf(child), preds);
                } while (i);
            }
            sorted[--cursor] = node;
        }
    };
    return arrays;
}());
exports.arrays = arrays;
