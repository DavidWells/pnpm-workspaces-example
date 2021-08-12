"use strict";
exports.__esModule = true;
exports.withMissingLeaves = void 0;
var lib_1 = require("./lib");
/**
 * Returns a `Generator` which emits every permutation of incomplete versions of
 * ${data} where a different primitive value is removed each time.
 */
exports.withMissingLeaves = lib_1.createTreePermuter(function (node, mutateNode) {
    if (node.isLeaf) {
        lib_1.removeNode(node, mutateNode);
    }
}, [undefined]);
