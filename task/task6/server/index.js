import http from 'http';
import { add, div, mul, sub } from './local/calculator.js';


const PORT = 5000

const app = http.createServer()

console.log(add(12, 14));
console.log(sub(46, 13));
console.log(mul(10, 3));
console.log(div(66, 6));



app.listen(PORT, ()=>{

    console.log(`Server Started Successfully in http://localhost:${PORT}`);
    
})
