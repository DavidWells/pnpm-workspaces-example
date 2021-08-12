"use strict";
exports.__esModule = true;
exports.isIso8601 = void 0;
var is_string_1 = require("./is-string");
var is_valid_date_1 = require("./is-valid-date");
/**
 * Asserts that ${value} is a String which conforms to common use-cases of the
 * ISO 8601 standard representation of dates and times.
 * @param value '1999-12-31T23:59:59'
 * @matcherName toBeIso8601
 * @memberMatcherName toHaveIso8601
 * @matcherMessage expected ${value} to be a valid ISO 8601 date string
 * @matcherNotMessage expected ${value} not to be a valid ISO 8601 date string
 */
var isIso8601 = function (value) {
    // '1999-12-31'
    // '1999-12-31T23:59'
    // '1999-12-31T23:59:59'
    // '1999-12-31T23:59:59.000'
    // '1999-12-31T23:59:59.000Z'
    return (is_string_1.isString(value) &&
        (/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/.test(value) ||
            /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})$/.test(value) ||
            /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})$/.test(value) ||
            /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})\.([0-9]{3})$/.test(value) ||
            /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})\.([0-9]{3})Z$/.test(value)) &&
        is_valid_date_1.isValidDate(new Date(value)));
};
exports.isIso8601 = isIso8601;
