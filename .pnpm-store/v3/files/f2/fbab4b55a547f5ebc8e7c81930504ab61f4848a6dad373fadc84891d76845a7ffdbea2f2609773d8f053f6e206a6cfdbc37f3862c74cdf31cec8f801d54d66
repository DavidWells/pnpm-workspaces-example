"use strict";
exports.__esModule = true;
exports.isFalse = void 0;
var is_boolean_1 = require("./is-boolean");
/**
 * Asserts that ${value} is `false` or `new Boolean(false)`.
 * @param value false
 * @matcherName toBeFalse
 * @memberMatcherName toHaveFalse
 * @matcherMessage expected ${value} to be false or Boolean(false)
 * @matcherNotMessage expected ${value} not to be false or Boolean(false)
 */
var isFalse = function (value) {
    return value === false || (is_boolean_1.isBoolean(value) && value.valueOf() === false);
};
exports.isFalse = isFalse;
