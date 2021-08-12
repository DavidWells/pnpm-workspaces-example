"use strict";
exports.__esModule = true;
exports.isDecimalNumber = void 0;
var is_number_1 = require("./is-number");
/**
 * Asserts that ${value} is a `Number` with positive decimal places.
 * @param value 12.55
 * @matcherName toBeDecimalNumber
 * @memberMatcherName toHaveDecimalNumber
 * @matcherMessage expected ${value} to be a number with positive decimal places
 * @matcherNotMessage expected ${value} not to be a number with positive decimal
 * places
 */
var isDecimalNumber = function (value) {
    return is_number_1.isNumber(value) && String(value).indexOf('.') !== -1;
};
exports.isDecimalNumber = isDecimalNumber;
