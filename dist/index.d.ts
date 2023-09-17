/// <reference types="node" />
import * as path from 'path';
declare global {
    var isOncloud: () => boolean;
}
export declare class CloudPath {
    constructor();
    exists(path: string): Promise<void>;
}
declare const _default: path.PlatformPath | CloudPath;
export default _default;
