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
exports.getDependencies = void 0;
var get_dependency_types_1 = require("../get-dependency-types");
var get_installations_of_1 = require("./get-installations-of");
function getDependencies(wrappers, options) {
    var types, visited, types_1, types_1_1, type, wrappers_1, wrappers_1_1, wrapper, _a, _b, _i, name, e_1_1, e_2_1;
    var e_2, _c, e_1, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                types = get_dependency_types_1.getDependencyTypes(options);
                visited = {};
                _e.label = 1;
            case 1:
                _e.trys.push([1, 14, 15, 16]);
                types_1 = __values(types), types_1_1 = types_1.next();
                _e.label = 2;
            case 2:
                if (!!types_1_1.done) return [3 /*break*/, 13];
                type = types_1_1.value;
                _e.label = 3;
            case 3:
                _e.trys.push([3, 10, 11, 12]);
                wrappers_1 = (e_1 = void 0, __values(wrappers)), wrappers_1_1 = wrappers_1.next();
                _e.label = 4;
            case 4:
                if (!!wrappers_1_1.done) return [3 /*break*/, 9];
                wrapper = wrappers_1_1.value;
                if (!wrapper.contents[type]) return [3 /*break*/, 8];
                _a = [];
                for (_b in wrapper.contents[type])
                    _a.push(_b);
                _i = 0;
                _e.label = 5;
            case 5:
                if (!(_i < _a.length)) return [3 /*break*/, 8];
                name = _a[_i];
                if (!(visited[name] === undefined)) return [3 /*break*/, 7];
                visited[name] = true;
                return [4 /*yield*/, {
                        installations: Array.from(get_installations_of_1.getInstallationsOf(name, types, wrappers)),
                        name: name
                    }];
            case 6:
                _e.sent();
                _e.label = 7;
            case 7:
                _i++;
                return [3 /*break*/, 5];
            case 8:
                wrappers_1_1 = wrappers_1.next();
                return [3 /*break*/, 4];
            case 9: return [3 /*break*/, 12];
            case 10:
                e_1_1 = _e.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 12];
            case 11:
                try {
                    if (wrappers_1_1 && !wrappers_1_1.done && (_d = wrappers_1["return"])) _d.call(wrappers_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 12:
                types_1_1 = types_1.next();
                return [3 /*break*/, 2];
            case 13: return [3 /*break*/, 16];
            case 14:
                e_2_1 = _e.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 16];
            case 15:
                try {
                    if (types_1_1 && !types_1_1.done && (_c = types_1["return"])) _c.call(types_1);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 16: return [2 /*return*/];
        }
    });
}
exports.getDependencies = getDependencies;
