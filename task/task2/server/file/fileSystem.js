import { error } from 'console';
import fs from 'fs';

const fileSystem = ()=>{

    fs.writeFile("data.txt","Welcome to node text content!", (err)=>{

        if(err) {
            console.log(error,err);
            
        }
        console.log('File Created Successfully');
        
    })
}

export default fileSystem