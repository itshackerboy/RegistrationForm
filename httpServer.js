var http = require('http');
http.createServer((req,res)=>{
    res.write("Sharanya");
    res.end();//end of the response
}).listen(8080,()=>{console.log("server is started...")});