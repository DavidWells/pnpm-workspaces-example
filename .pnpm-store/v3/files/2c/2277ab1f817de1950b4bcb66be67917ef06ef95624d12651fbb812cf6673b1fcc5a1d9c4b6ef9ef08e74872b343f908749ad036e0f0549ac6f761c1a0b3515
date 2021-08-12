"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.fixMismatchesToDisk = exports.fixMismatches = void 0;
var chalk_1 = __importDefault(require("chalk"));
var fs_extra_1 = require("fs-extra");
var os_1 = require("os");
var path_1 = require("path");
var get_highest_version_1 = require("./lib/get-highest-version");
var get_wrappers_1 = require("./lib/get-wrappers");
var get_mismatched_dependencies_1 = require("./lib/installations/get-mismatched-dependencies");
var log_1 = require("./lib/log");
var matches_filter_1 = require("./lib/matches-filter");
var getWorkspaceVersion = function (name, wrappers) {
    var _a;
    var local = wrappers.find(function (wrapper) { return wrapper.contents.name === name; });
    return ((_a = local === null || local === void 0 ? void 0 : local.contents) === null || _a === void 0 ? void 0 : _a.version) || null;
};
var fixMismatches = function (wrappers, options) {
    var iterator = get_mismatched_dependencies_1.getMismatchedDependencies(wrappers, options);
    var mismatches = Array.from(iterator).filter(matches_filter_1.matchesFilter(options));
    mismatches.forEach(function (installedPackage) {
        var versions = installedPackage.installations.map(function (installation) { return installation.version; });
        var nextVersion = getWorkspaceVersion(installedPackage.name, wrappers) || get_highest_version_1.getHighestVersion(versions);
        if (nextVersion !== null) {
            installedPackage.installations.forEach(function (_a) {
                var type = _a.type, name = _a.name, source = _a.source;
                var dependencies = source.contents[type];
                if (dependencies) {
                    dependencies[name] = nextVersion;
                }
            });
        }
    });
};
exports.fixMismatches = fixMismatches;
var fixMismatchesToDisk = function (options) {
    var indent = options.indent, source = options.source;
    var toJson = function (wrapper) { return "" + JSON.stringify(wrapper.contents, null, indent) + os_1.EOL; };
    var wrappers = get_wrappers_1.getWrappers({ source: source });
    var allBefore = wrappers.map(toJson);
    exports.fixMismatches(wrappers, options);
    wrappers.forEach(function (wrapper, i) {
        var shortPath = path_1.relative(process.cwd(), wrapper.filePath);
        var before = allBefore[i];
        var after = toJson(wrapper);
        if (before !== after) {
            fs_extra_1.writeFileSync(wrapper.filePath, after);
            log_1.log(chalk_1["default"].green('✓'), shortPath);
        }
        else {
            log_1.log(chalk_1["default"].dim('-', shortPath));
        }
    });
};
exports.fixMismatchesToDisk = fixMismatchesToDisk;
