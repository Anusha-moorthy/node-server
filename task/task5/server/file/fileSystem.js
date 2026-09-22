import fs from 'fs';

import os from 'os';

const fileSystem = ()=>{

    const result = {"Path":os.homedir(), "Platform":os.platform(), "Architecture":os.arch(), "Release":os.release()}

    console.log(result);
    

}

export default fileSystem