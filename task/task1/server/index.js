import http from "http";

const PORT  = 5000
const app = http.createServer()

app.listen(PORT, ()=>{
    console.log(`Server Started Successfully http://localhost/${PORT}`);
    
})