import { collect } from './lib/collect';
export declare type DependencyType = 'dependencies' | 'devDependencies' | 'peerDependencies';
export declare const DEPENDENCY_TYPES: DependencyType[];
export declare const GREATER = 1;
export declare const LESSER = -1;
export declare const SAME = 0;
export declare type ValidRange = '*' | '' | '>' | '>=' | '.x' | '<' | '<=' | '^' | '~';
export declare const RANGE_ANY = "*";
export declare const RANGE_EXACT = "";
export declare const RANGE_GT = ">";
export declare const RANGE_GTE = ">=";
export declare const RANGE_LOOSE = ".x";
export declare const RANGE_LT = "<";
export declare const RANGE_LTE = "<=";
export declare const RANGE_MINOR = "^";
export declare const RANGE_PATCH = "~";
export declare const SEMVER_ORDER: ValidRange[];
export interface VersionGroup {
    /**
     * the names of packages in your monorepo which belong to this group, taken
     * from the "name" field in package.json, not the package directory name
     */
    packages: string[];
    /**
     * the names of the dependencies (eg. "lodash") which belong to this group
     */
    dependencies: string[];
}
export declare type SyncpackConfig = Readonly<{
    /**
     * whether to search within devDependencies
     */
    dev: boolean;
    /**
     * A string which will be passed to `new RegExp()` to match against package
     * names that should be included
     */
    filter: string;
    /**
     * The character(s) to be used to indent your package.json files when writing
     * to disk
     */
    indent: string;
    /**
     * whether to search within peerDependencies
     */
    peer: boolean;
    /**
     * whether to search within dependencies
     */
    prod: boolean;
    /**
     * defaults to `""` to ensure that exact dependency versions are used instead
     * of loose ranges
     */
    semverRange: string;
    /**
     * which fields within package.json files should be sorted alphabetically
     */
    sortAz: string[];
    /**
     * which fields within package.json files should appear at the top, and in
     * what order
     */
    sortFirst: string[];
    /**
     * glob patterns for package.json file locations
     */
    source: string[];
    /**
     *
     */
    versionGroups: VersionGroup[];
}>;
export declare const DEFAULT_CONFIG: SyncpackConfig;
export declare const ALL_PATTERNS: string[];
interface OptionsByName {
    dev: [string, string];
    filter: [string, string];
    indent: [string, string];
    peer: [string, string];
    prod: [string, string];
    semverRange: [string, string];
    source: [string, string, typeof collect, string[]];
}
export declare const option: OptionsByName;
export {};
