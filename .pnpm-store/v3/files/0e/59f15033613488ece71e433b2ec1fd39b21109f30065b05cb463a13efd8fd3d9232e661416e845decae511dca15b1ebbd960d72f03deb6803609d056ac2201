"use strict";
exports.__esModule = true;
exports.throwsAnyError = void 0;
/**
 * Asserts that ${value} is a `Function` which throws when invoked.
 * @param value () => { throw new Error("it wasn't me!") }
 * @matcherName toThrowAnyError
 * @memberMatcherName toHaveMethodThrowingAnyError
 * @matcherMessage expected ${value} to throw
 * @matcherNotMessage expected ${value} not to throw
 */
var throwsAnyError = function (value) {
    try {
        value();
        return false;
    }
    catch (err) {
        return true;
    }
};
exports.throwsAnyError = throwsAnyError;
