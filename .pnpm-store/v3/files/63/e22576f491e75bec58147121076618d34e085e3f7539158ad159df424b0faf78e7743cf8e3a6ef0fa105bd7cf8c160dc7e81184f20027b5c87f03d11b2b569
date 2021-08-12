"use strict";
exports.__esModule = true;
exports.isArrayOfStrings = void 0;
var is_array_1 = require("./is-array");
var is_string_1 = require("./is-string");
var every_1 = require("./lib/every");
/**
 * Asserts that ${value} is an `Array` containing only `String` values.
 * @param value ['we', 'are', 'all', 'strings']
 * @matcherName toBeArrayOfStrings
 * @memberMatcherName toHaveArrayOfStrings
 * @matcherMessage expected ${value} to be a non-empty array, containing only
 * strings
 * @matcherNotMessage expected ${value} not to be a non-empty array, containing
 * only strings
 */
var isArrayOfStrings = function (value) {
    return is_array_1.isArray(value) && every_1.every(is_string_1.isString, value);
};
exports.isArrayOfStrings = isArrayOfStrings;
