"use strict";
exports.__esModule = true;
exports.option = exports.ALL_PATTERNS = exports.DEFAULT_CONFIG = exports.SEMVER_ORDER = exports.RANGE_PATCH = exports.RANGE_MINOR = exports.RANGE_LTE = exports.RANGE_LT = exports.RANGE_LOOSE = exports.RANGE_GTE = exports.RANGE_GT = exports.RANGE_EXACT = exports.RANGE_ANY = exports.SAME = exports.LESSER = exports.GREATER = exports.DEPENDENCY_TYPES = void 0;
var collect_1 = require("./lib/collect");
exports.DEPENDENCY_TYPES = ['dependencies', 'devDependencies', 'peerDependencies'];
exports.GREATER = 1;
exports.LESSER = -1;
exports.SAME = 0;
exports.RANGE_ANY = '*';
exports.RANGE_EXACT = '';
exports.RANGE_GT = '>';
exports.RANGE_GTE = '>=';
exports.RANGE_LOOSE = '.x';
exports.RANGE_LT = '<';
exports.RANGE_LTE = '<=';
exports.RANGE_MINOR = '^';
exports.RANGE_PATCH = '~';
exports.SEMVER_ORDER = [
    exports.RANGE_LT,
    exports.RANGE_LTE,
    exports.RANGE_EXACT,
    exports.RANGE_PATCH,
    exports.RANGE_MINOR,
    exports.RANGE_GTE,
    exports.RANGE_GT,
    exports.RANGE_ANY,
];
exports.DEFAULT_CONFIG = {
    dev: true,
    filter: '.',
    indent: '  ',
    peer: true,
    prod: true,
    semverRange: '',
    sortAz: ['contributors', 'dependencies', 'devDependencies', 'keywords', 'peerDependencies', 'resolutions', 'scripts'],
    sortFirst: ['name', 'description', 'version', 'author'],
    source: [],
    versionGroups: []
};
var MONOREPO_PATTERN = 'package.json';
var PACKAGES_PATTERN = 'packages/*/package.json';
exports.ALL_PATTERNS = [MONOREPO_PATTERN, PACKAGES_PATTERN];
exports.option = {
    dev: ['-d, --dev', 'include devDependencies'],
    filter: ['-f, --filter [pattern]', 'regex for dependency filter'],
    indent: ['-i, --indent [value]', "override indentation. defaults to \"" + exports.DEFAULT_CONFIG.indent + "\""],
    peer: ['-P, --peer', 'include peerDependencies'],
    prod: ['-p, --prod', 'include dependencies'],
    semverRange: [
        '-r, --semver-range <range>',
        "see supported ranges below. defaults to \"" + exports.DEFAULT_CONFIG.semverRange + "\"",
    ],
    source: ['-s, --source [pattern]', 'glob pattern for package.json files to read from', collect_1.collect, []]
};
