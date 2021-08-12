"use strict";
exports.__esModule = true;
exports.isArrayOfBooleans = void 0;
var is_array_1 = require("./is-array");
var is_boolean_1 = require("./is-boolean");
var every_1 = require("./lib/every");
/**
 * Asserts that ${value} is an `Array` containing only `Boolean` values.
 * @param value [true, false, new Boolean(true)]
 * @matcherName toBeArrayOfBooleans
 * @memberMatcherName toHaveArrayOfBooleans
 * @matcherMessage expected ${value} to be a non-empty array, containing only
 * boolean values
 * @matcherNotMessage expected ${value} not to be a non-empty array, containing
 * only boolean values
 */
var isArrayOfBooleans = function (value) {
    return is_array_1.isArray(value) && every_1.every(is_boolean_1.isBoolean, value);
};
exports.isArrayOfBooleans = isArrayOfBooleans;
