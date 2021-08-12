"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.listMismatchesFromDisk = exports.listMismatches = void 0;
var chalk_1 = __importDefault(require("chalk"));
var get_wrappers_1 = require("./lib/get-wrappers");
var get_mismatched_dependencies_1 = require("./lib/installations/get-mismatched-dependencies");
var sort_by_name_1 = require("./lib/installations/sort-by-name");
var log_1 = require("./lib/log");
var matches_filter_1 = require("./lib/matches-filter");
var listMismatches = function (wrappers, options) {
    var iterator = get_mismatched_dependencies_1.getMismatchedDependencies(wrappers, options);
    var mismatches = Array.from(iterator).filter(matches_filter_1.matchesFilter(options));
    mismatches.sort(sort_by_name_1.sortByName).forEach(function (_a) {
        var name = _a.name, installations = _a.installations;
        log_1.log(chalk_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["{red \u2715 ", "}"], ["{red \u2715 ", "}"])), name));
        installations.forEach(function (_a) {
            var source = _a.source, type = _a.type, version = _a.version;
            log_1.log(chalk_1["default"](templateObject_2 || (templateObject_2 = __makeTemplateObject(["{dim -} ", " {dim in ", " of ", "}"], ["{dim -} ", " {dim in ", " of ", "}"])), version, type, source.contents.name));
        });
    });
    return mismatches;
};
exports.listMismatches = listMismatches;
var listMismatchesFromDisk = function (options) {
    var wrappers = get_wrappers_1.getWrappers(options);
    var mismatches = exports.listMismatches(wrappers, options);
    if (mismatches.length > 0) {
        process.exit(1);
    }
};
exports.listMismatchesFromDisk = listMismatchesFromDisk;
var templateObject_1, templateObject_2;
