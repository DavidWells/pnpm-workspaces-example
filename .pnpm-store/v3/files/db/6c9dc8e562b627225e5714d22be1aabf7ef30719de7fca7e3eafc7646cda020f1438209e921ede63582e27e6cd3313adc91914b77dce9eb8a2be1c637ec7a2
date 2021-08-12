"use strict";
exports.__esModule = true;
exports.withNullBranches = void 0;
var lib_1 = require("./lib");
/**
 * Returns a `Generator` which emits every permutation of incomplete versions of
 * ${data} where a different `Object` or `Array` is replaced with `null` each
 * time.
 */
exports.withNullBranches = lib_1.createTreePermuter(function (node, mutateNode) {
    if (node.isBranch) {
        lib_1.nullifyNode(node, mutateNode);
    }
}, [null]);
