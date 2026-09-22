import fs from 'fs';

const fileSystem = ()=>{

    // fs.writeFile("data.txt","Welcome to node text content", (err)=>{

    //     if(err) {
    //         console.log(error, err);
            
    //     }
    //     console.log('File Created Successfully');
        
    // })

    fs.readFile("data.txt", "utf-8", (err,data)=>{
        console.log(data);
        
    })

}

export default fileSystem