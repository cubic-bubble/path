import * as path from 'path'

declare global {
  var isOncloud: () => boolean
}

global.isOncloud = () => { return process.env.MODE === 'cloud' }

// Cloud based Filesystem Path Interface
export function cloudPatch(){
  /**
   * Override path methods to adapt to cloud
   * Eg.
   *
   * path.resolve = ( path, ...args ) => { ... }
   */

  return path
}

export default isOncloud() ? cloudPatch() : path