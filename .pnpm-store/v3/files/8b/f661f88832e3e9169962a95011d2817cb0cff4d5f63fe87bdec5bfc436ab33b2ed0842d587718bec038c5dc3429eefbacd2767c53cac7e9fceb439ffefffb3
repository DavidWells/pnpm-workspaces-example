"use strict";
exports.__esModule = true;
exports.formatToDisk = exports.format = void 0;
var get_wrappers_1 = require("./lib/get-wrappers");
var write_if_changed_1 = require("./lib/write-if-changed");
var sortObject = function (sortedKeys, obj) {
    sortedKeys.forEach(function (key) {
        var value = obj[key];
        delete obj[key];
        obj[key] = value;
    });
};
var sortAlphabetically = function (value) {
    if (Array.isArray(value)) {
        value.sort();
    }
    else if (value && typeof value === 'object') {
        sortObject(Object.keys(value).sort(), value);
    }
};
var format = function (wrapper, options) {
    var sortAz = options.sortAz, sortFirst = options.sortFirst;
    var contents = wrapper.contents;
    var sortedKeys = Object.keys(contents).sort();
    var keys = new Set(sortFirst.concat(sortedKeys));
    if (contents.bugs && typeof contents.bugs === 'object' && contents.bugs.url) {
        contents.bugs = contents.bugs.url;
    }
    if (contents.repository && typeof contents.repository === 'object' && contents.repository.url) {
        if (contents.repository.url.includes('github.com')) {
            contents.repository = contents.repository.url.replace(/^.+github\.com\//, '');
        }
        else {
            contents.repository = contents.repository.url;
        }
    }
    sortAz.forEach(function (key) { return sortAlphabetically(contents[key]); });
    sortObject(keys, contents);
    return contents;
};
exports.format = format;
var formatToDisk = function (options) {
    get_wrappers_1.getWrappers({ source: options.source }).forEach(function (wrapper) {
        write_if_changed_1.writeIfChanged(options.indent, wrapper, function () {
            exports.format(wrapper, options);
        });
    });
};
exports.formatToDisk = formatToDisk;
