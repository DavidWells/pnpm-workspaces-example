"use strict";
exports.__esModule = true;
exports.withNullLeaves = void 0;
var lib_1 = require("./lib");
/**
 * Returns a `Generator` which emits every permutation of incomplete versions of
 * ${data} where a different primitive value is replaced with `null` each time.
 */
exports.withNullLeaves = lib_1.createTreePermuter(function (node, mutateNode) {
    if (node.isLeaf) {
        lib_1.nullifyNode(node, mutateNode);
    }
}, [null]);
