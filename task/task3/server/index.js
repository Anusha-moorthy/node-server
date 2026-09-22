import http from 'http';
import fileSystem from './file/fileSystem.js';


const PORT = 5000

const app = http.createServer()

fileSystem()



app.listen(PORT, ()=>{

    console.log(`Server Started Successfully in http://localhost:${PORT}`);
    
})
