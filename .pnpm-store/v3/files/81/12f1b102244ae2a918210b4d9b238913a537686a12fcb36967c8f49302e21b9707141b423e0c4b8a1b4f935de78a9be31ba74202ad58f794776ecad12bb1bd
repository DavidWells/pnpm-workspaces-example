"use strict";
exports.__esModule = true;
exports.isArrayOfNumbers = void 0;
var is_array_1 = require("./is-array");
var is_number_1 = require("./is-number");
var every_1 = require("./lib/every");
/**
 * Asserts that ${value} is an `Array` containing only `Number` values.
 * @param value [12, 0, 14]
 * @matcherName toBeArrayOfNumbers
 * @memberMatcherName toHaveArrayOfNumbers
 * @matcherMessage expected ${value} to be a non-empty array, containing only
 * numbers
 * @matcherNotMessage expected ${value} not to be a non-empty array, containing
 * only numbers
 */
var isArrayOfNumbers = function (value) {
    return is_array_1.isArray(value) && every_1.every(is_number_1.isNumber, value);
};
exports.isArrayOfNumbers = isArrayOfNumbers;
