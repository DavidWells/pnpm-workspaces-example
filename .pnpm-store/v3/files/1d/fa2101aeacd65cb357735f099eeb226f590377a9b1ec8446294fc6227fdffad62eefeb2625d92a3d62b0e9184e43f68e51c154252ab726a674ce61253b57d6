"use strict";
exports.__esModule = true;
exports.getHighestVersion = void 0;
var semver_1 = require("semver");
var constants_1 = require("../../constants");
var is_semver_1 = require("./is-semver");
var getRange = function (version) { return version.slice(0, version.search(/[0-9]/)); };
var getRangeScore = function (version) {
    if (version === null)
        return 0;
    if (version === constants_1.RANGE_ANY)
        return 8;
    var range = getRange(version);
    if (range === constants_1.RANGE_GT)
        return 7;
    if (range === constants_1.RANGE_GTE)
        return 6;
    if (range === constants_1.RANGE_MINOR)
        return 5;
    if (version.indexOf('.x') !== -1)
        return 4;
    if (range === constants_1.RANGE_PATCH)
        return 3;
    if (range === constants_1.RANGE_EXACT)
        return 2;
    if (range === constants_1.RANGE_LTE)
        return 1;
    if (range === constants_1.RANGE_LT)
        return 0;
    return 0;
};
var getHighestVersion = function (versions) {
    return versions.reduce(function (rawHighest, raw) {
        var version = semver_1.valid(semver_1.coerce(raw));
        var highest = semver_1.valid(semver_1.coerce(rawHighest));
        if (raw === '*' || rawHighest === '*') {
            return '*';
        }
        if (!is_semver_1.isSemver(raw) || version === null) {
            return rawHighest;
        }
        if (highest === null) {
            return raw;
        }
        if (semver_1.gt(version, highest)) {
            return raw;
        }
        if (semver_1.eq(version, highest) && getRangeScore(raw) > getRangeScore(rawHighest)) {
            return raw;
        }
        return rawHighest;
    }, null);
};
exports.getHighestVersion = getHighestVersion;
