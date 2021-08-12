"use strict";
exports.__esModule = true;
exports.withMissingBranches = void 0;
var lib_1 = require("./lib");
/**
 * Returns a `Generator` which emits every permutation of incomplete versions of
 * ${data} where a different `Object` or `Array` is `undefined` each time.
 */
exports.withMissingBranches = lib_1.createTreePermuter(function (node, mutateNode) {
    if (node.isBranch) {
        lib_1.removeNode(node, mutateNode);
    }
}, [undefined]);
