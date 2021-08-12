"use strict";
exports.__esModule = true;
exports.isVisibleString = void 0;
var is_string_1 = require("./is-string");
/**
 * Asserts that ${value} is a valid `String` containing at least one character
 * which is not whitespace.
 * @param value 'i am visible'
 * @matcherName toBeVisibleString
 * @memberMatcherName toHaveVisibleString
 * @matcherMessage expected ${value} to be a string with at least one
 * non-whitespace character
 * @matcherNotMessage expected ${value} not to be a string with at least one
 * non-whitespace character
 */
var isVisibleString = function (value) {
    return is_string_1.isString(value) && value.length > 0 && value.search(/\S/) !== -1;
};
exports.isVisibleString = isVisibleString;
