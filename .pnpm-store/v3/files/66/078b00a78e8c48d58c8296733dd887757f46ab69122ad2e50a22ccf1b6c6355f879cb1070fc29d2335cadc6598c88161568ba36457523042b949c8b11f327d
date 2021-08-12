export interface RootNode {
    isArray?: true;
    isBranch?: true;
    isLeaf?: true;
    isObject?: true;
    key: null;
    parentNode: null;
    path: (string | number)[];
    value: any;
}
export interface DeepNode {
    isArray?: true;
    isBranch?: true;
    isLeaf?: true;
    isObject?: true;
    key: string | number;
    parentNode: TreeNode;
    path: (string | number)[];
    value: any;
}
declare type TreeNode = RootNode | DeepNode;
export declare type DeepNodeVisitor = (node: DeepNode, requestMutation: (applyMutation: (key: DeepNode['key'], clonedParent: any) => void) => void) => void;
export declare const createTreePermuter: (visitor: DeepNodeVisitor, initialValues?: any[]) => (rootNode: any) => Generator<any, void, undefined>;
export declare const removeNode: DeepNodeVisitor;
export declare const nullifyNode: DeepNodeVisitor;
export {};
