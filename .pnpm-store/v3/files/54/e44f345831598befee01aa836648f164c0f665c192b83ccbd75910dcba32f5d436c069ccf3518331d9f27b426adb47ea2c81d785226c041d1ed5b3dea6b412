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
exports.getMismatchedDependencies = void 0;
var get_dependencies_1 = require("./get-dependencies");
var get_grouped_mismatched_dependencies_1 = require("./get-grouped-mismatched-dependencies");
function getUngroupedMismatchedDependencies(wrappers, options) {
    var iterator, iterator_1, iterator_1_1, installedPackage, installations, len, i, e_1_1;
    var e_1, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                iterator = get_dependencies_1.getDependencies(wrappers, options);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 8, 9, 10]);
                iterator_1 = __values(iterator), iterator_1_1 = iterator_1.next();
                _b.label = 2;
            case 2:
                if (!!iterator_1_1.done) return [3 /*break*/, 7];
                installedPackage = iterator_1_1.value;
                installations = installedPackage.installations;
                len = installations.length;
                if (!(len > 1)) return [3 /*break*/, 6];
                i = 1;
                _b.label = 3;
            case 3:
                if (!(i < len)) return [3 /*break*/, 6];
                if (!(installations[i].version !== installations[i - 1].version)) return [3 /*break*/, 5];
                return [4 /*yield*/, installedPackage];
            case 4:
                _b.sent();
                return [3 /*break*/, 6];
            case 5:
                i++;
                return [3 /*break*/, 3];
            case 6:
                iterator_1_1 = iterator_1.next();
                return [3 /*break*/, 2];
            case 7: return [3 /*break*/, 10];
            case 8:
                e_1_1 = _b.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 10];
            case 9:
                try {
                    if (iterator_1_1 && !iterator_1_1.done && (_a = iterator_1["return"])) _a.call(iterator_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 10: return [2 /*return*/];
        }
    });
}
function getMismatchedDependencies(wrappers, options) {
    var iterator, iterator_2, iterator_2_1, installedPackage, e_2_1;
    var e_2, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                iterator = options.versionGroups.length
                    ? get_grouped_mismatched_dependencies_1.getGroupedMismatchedDependencies(wrappers, options)
                    : getUngroupedMismatchedDependencies(wrappers, options);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, 7, 8]);
                iterator_2 = __values(iterator), iterator_2_1 = iterator_2.next();
                _b.label = 2;
            case 2:
                if (!!iterator_2_1.done) return [3 /*break*/, 5];
                installedPackage = iterator_2_1.value;
                return [4 /*yield*/, installedPackage];
            case 3:
                _b.sent();
                _b.label = 4;
            case 4:
                iterator_2_1 = iterator_2.next();
                return [3 /*break*/, 2];
            case 5: return [3 /*break*/, 8];
            case 6:
                e_2_1 = _b.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 8];
            case 7:
                try {
                    if (iterator_2_1 && !iterator_2_1.done && (_a = iterator_2["return"])) _a.call(iterator_2);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 8: return [2 /*return*/];
        }
    });
}
exports.getMismatchedDependencies = getMismatchedDependencies;
