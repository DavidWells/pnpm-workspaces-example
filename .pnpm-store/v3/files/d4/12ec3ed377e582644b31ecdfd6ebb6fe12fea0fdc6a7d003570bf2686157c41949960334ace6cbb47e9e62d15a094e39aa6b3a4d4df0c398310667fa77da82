"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.listFromDisk = exports.list = void 0;
var chalk_1 = __importDefault(require("chalk"));
var get_wrappers_1 = require("./lib/get-wrappers");
var get_dependencies_1 = require("./lib/installations/get-dependencies");
var get_mismatched_dependencies_1 = require("./lib/installations/get-mismatched-dependencies");
var sort_by_name_1 = require("./lib/installations/sort-by-name");
var log_1 = require("./lib/log");
var matches_filter_1 = require("./lib/matches-filter");
var list = function (wrappers, options) {
    var packages = Array.from(get_dependencies_1.getDependencies(wrappers, options)).filter(matches_filter_1.matchesFilter(options));
    var mismatches = Array.from(get_mismatched_dependencies_1.getMismatchedDependencies(wrappers, options)).filter(matches_filter_1.matchesFilter(options));
    packages.sort(sort_by_name_1.sortByName).forEach(function (_a) {
        var name = _a.name, installations = _a.installations;
        var versions = installations.map(function (_a) {
            var version = _a.version;
            return version;
        });
        var uniques = Array.from(new Set(versions));
        var mismatch = mismatches.find(function (mismatch) { return mismatch.name === name; });
        var hasMismatches = mismatch !== undefined;
        var uniquesList = uniques.sort().join(', ');
        var message = hasMismatches
            ? chalk_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["{red \u2715 ", "} {dim.red ", "}"], ["{red \u2715 ", "} {dim.red ", "}"])), name, uniquesList) : chalk_1["default"](templateObject_2 || (templateObject_2 = __makeTemplateObject(["{dim -} {white ", "} {dim ", "}"], ["{dim -} {white ", "} {dim ", "}"])), name, uniquesList);
        log_1.log(message);
    });
};
exports.list = list;
var listFromDisk = function (options) {
    var wrappers = get_wrappers_1.getWrappers(options);
    exports.list(wrappers, options);
};
exports.listFromDisk = listFromDisk;
var templateObject_1, templateObject_2;
