"use strict";
exports.__esModule = true;
exports.isNumber = void 0;
var has_type_1 = require("./lib/has-type");
/**
 * Asserts that ${value} is a valid `Number` or `new Number()` and not `NaN`.
 * @param value 8
 * @matcherName toBeNumber
 * @memberMatcherName toHaveNumber
 * @matcherMessage expected ${value} to be a valid number
 * @matcherNotMessage expected ${value} not to be a valid number
 */
var isNumber = function (value) {
    return has_type_1.hasType('Number')(value) && !isNaN(parseFloat(String(value)));
};
exports.isNumber = isNumber;
