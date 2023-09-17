/// <reference types="node" />
import * as path from 'path';
declare global {
    var isOncloud: () => boolean;
}
export declare function cloudPatch(): path.PlatformPath;
declare const _default: path.PlatformPath;
export default _default;
