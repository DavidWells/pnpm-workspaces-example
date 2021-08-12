"use strict";
exports.__esModule = true;
exports.isWholeNumber = void 0;
var is_divisible_by_1 = require("./is-divisible-by");
var is_number_1 = require("./is-number");
/**
 * Asserts that ${value} is a `Number` with no positive decimal places.
 * @param value 8
 * @matcherName toBeWholeNumber
 * @memberMatcherName toHaveWholeNumber
 * @matcherMessage expected ${value} to be a whole number
 * @matcherNotMessage expected ${value} not to be a whole number
 */
var isWholeNumber = function (value) {
    return is_number_1.isNumber(value) && (value === 0 || is_divisible_by_1.isDivisibleBy(1, value));
};
exports.isWholeNumber = isWholeNumber;
