import { DependencyType, SyncpackConfig } from '../../../constants';
import { SourceWrapper } from '../get-wrappers';
export interface Installation {
    /** which section the package was installed in */
    type: DependencyType;
    /** eg 'lodash' */
    name: string;
    /** package.json file contents */
    source: SourceWrapper;
    /** eg '0.1.0' */
    version: string;
}
export interface InstalledPackage {
    /** eg 'lodash' */
    name: string;
    /** each location this package is installed */
    installations: Installation[];
}
export declare function getDependencies(wrappers: SourceWrapper[], options: Pick<SyncpackConfig, 'dev' | 'peer' | 'prod'>): Generator<InstalledPackage>;
