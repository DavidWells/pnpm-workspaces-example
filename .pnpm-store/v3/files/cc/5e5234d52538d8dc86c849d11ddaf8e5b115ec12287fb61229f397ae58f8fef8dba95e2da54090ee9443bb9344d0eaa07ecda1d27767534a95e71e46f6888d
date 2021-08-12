"use strict";
exports.__esModule = true;
exports.isTrue = void 0;
var is_boolean_1 = require("./is-boolean");
/**
 * Asserts that ${value} is `true` or `new Boolean(true)`.
 * @param value true
 * @matcherName toBeTrue
 * @memberMatcherName toHaveTrue
 * @matcherMessage expected ${value} to be true or Boolean(true)
 * @matcherNotMessage expected ${value} not to be true or Boolean(true)
 */
var isTrue = function (value) {
    return value === true || (is_boolean_1.isBoolean(value) && value.valueOf() === true);
};
exports.isTrue = isTrue;
