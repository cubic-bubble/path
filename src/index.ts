import * as path from 'path'

declare global {
  var isOncloud: () => boolean
}

global.isOncloud = () => { return process.env.MODE === 'cloud' }

// Cloud based Filesystem Path Interface
export class CloudPath {

  constructor(){

    // TODO: Define credentials & Connect to cloud space

  }

  async exists( path: string ){
    console.log('Path: ', path )
  }
}

export default isOncloud() ? new CloudPath : path