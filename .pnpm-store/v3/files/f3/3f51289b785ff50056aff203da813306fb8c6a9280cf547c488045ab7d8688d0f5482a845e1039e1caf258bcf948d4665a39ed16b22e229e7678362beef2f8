"use strict";
exports.__esModule = true;
exports.isArrayOfObjects = void 0;
var is_array_1 = require("./is-array");
var is_object_1 = require("./is-object");
var every_1 = require("./lib/every");
/**
 * Asserts that ${value} is an `Array` containing only `Object` values.
 * @param value [{}, new Object()]
 * @matcherName toBeArrayOfObjects
 * @memberMatcherName toHaveArrayOfObjects
 * @matcherMessage expected ${value} to be a non-empty array, containing only
 * objects
 * @matcherNotMessage expected ${value} not to be a non-empty array, containing
 * only objects
 */
var isArrayOfObjects = function (value) {
    return is_array_1.isArray(value) && every_1.every(is_object_1.isObject, value);
};
exports.isArrayOfObjects = isArrayOfObjects;
