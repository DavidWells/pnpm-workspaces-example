"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
exports.__esModule = true;
exports.getGroupedMismatchedDependencies = void 0;
var get_dependencies_1 = require("./get-dependencies");
var groupContainsDependency = function (versionGroup, installedPackage) {
    return versionGroup.dependencies.includes(installedPackage.name);
};
var groupContainsPackage = function (versionGroup, installation) {
    return versionGroup.packages.includes("" + installation.source.contents.name);
};
var hasDifferentVersionToPreviousSibling = function (installation, i, all) {
    return i > 0 && installation.version !== all[i - 1].version;
};
function getGroupedMismatchedDependencies(wrappers, options) {
    var iterator, installedPackages, groupedDependenciesByGroup, ungroupedDependencies, groupedMismatches, ungroupedMismatches, allMismatches, allMismatches_1, allMismatches_1_1, installedPackage, e_1_1;
    var e_1, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                iterator = get_dependencies_1.getDependencies(wrappers, options);
                installedPackages = Array.from(iterator);
                groupedDependenciesByGroup = options.versionGroups.map(function (versionGroup) {
                    return installedPackages
                        .filter(function (installedPackage) { return groupContainsDependency(versionGroup, installedPackage); })
                        .map(function (_a) {
                        var installations = _a.installations, name = _a.name;
                        return ({
                            installations: installations.filter(function (installation) { return groupContainsPackage(versionGroup, installation); }),
                            name: name
                        });
                    })
                        .filter(function (_a) {
                        var installations = _a.installations;
                        return installations.length > 0;
                    });
                });
                ungroupedDependencies = installedPackages
                    .map(function (installedPackage) {
                    var installations = installedPackage.installations, name = installedPackage.name;
                    return {
                        installations: installations.filter(function (installation) {
                            return options.versionGroups.every(function (versionGroup) {
                                return !groupContainsDependency(versionGroup, installedPackage) ||
                                    !groupContainsPackage(versionGroup, installation);
                            });
                        }),
                        name: name
                    };
                })
                    .filter(function (_a) {
                    var installations = _a.installations;
                    return installations.length > 0;
                });
                groupedMismatches = groupedDependenciesByGroup
                    .map(function (groupedDependencies) {
                    return groupedDependencies.filter(function (installedPackage) {
                        return installedPackage.installations.some(hasDifferentVersionToPreviousSibling);
                    });
                })
                    .reduce(function (flat, next) { return flat.concat(next); }, []);
                ungroupedMismatches = ungroupedDependencies.filter(function (installedPackage) {
                    return installedPackage.installations.some(hasDifferentVersionToPreviousSibling);
                });
                allMismatches = groupedMismatches.concat(ungroupedMismatches);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, 7, 8]);
                allMismatches_1 = __values(allMismatches), allMismatches_1_1 = allMismatches_1.next();
                _b.label = 2;
            case 2:
                if (!!allMismatches_1_1.done) return [3 /*break*/, 5];
                installedPackage = allMismatches_1_1.value;
                return [4 /*yield*/, installedPackage];
            case 3:
                _b.sent();
                _b.label = 4;
            case 4:
                allMismatches_1_1 = allMismatches_1.next();
                return [3 /*break*/, 2];
            case 5: return [3 /*break*/, 8];
            case 6:
                e_1_1 = _b.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 8];
            case 7:
                try {
                    if (allMismatches_1_1 && !allMismatches_1_1.done && (_a = allMismatches_1["return"])) _a.call(allMismatches_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 8: return [2 /*return*/];
        }
    });
}
exports.getGroupedMismatchedDependencies = getGroupedMismatchedDependencies;
