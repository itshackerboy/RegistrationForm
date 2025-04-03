//import express into this file
const express = require('express');
const app = express();//create the object

app.listen(8080,()=>{
    console.log("server is created...");
})

/*app.use(express.json());

app.get("/myname",(req,res)=>{
    let email = req.query['email'];
    res.write("received value is"+email);
    res.end();//ending the response
})

app.post("/register",(req,res)=>{
    let name = req.query['name'];
    let email = req.query['email'];
    let mobile = req.query['mobile'];
    let password = req.query['password'];

    if(name.length < 6 || name.length <15){
        res.status(400).json({"msg":"name should be between 6 to 15 characters"})
    }else if(password.length >6 || password.length > 15){
        res.status(400).json({"msg":"password should be between 6 to 15 characters"})
    }else if(mobile.length  == 10){
        res.status(400).json({"msg":"mobile should be 10 characters"})
        
    }else if( !(/(.+)@(.+){2,}\.(.+){2.}/.test(email))){
        res.status(400).json({"msg":"email is not in valid format!!!"})
    }else{
        res.status(400).json({"msg":"success"})
    }
    res.end();//ending the response

})
app.post("/register2",(req,res)=>{
    let {email,password} = req.body;

    console.log(email,password);
    
    res.end();
})

app.put("/myname",(req,res)=>{
    res.write("this is for put method");
    res.end();
})

app.delete("/myname",(req,res)=>{
    res.write("this is for delete method");
    res.end();
})

app.listen(8080,()=>console.log("server is started. !!!"));*/