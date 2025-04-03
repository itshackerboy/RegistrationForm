const UserService = require('./Service/UserService');
const express = require('express');
const app = express();

const userServiceObj = new UserService();
app.get("/myemail",(req,res)=>{
    res.write("get email is test@gmail.com");
    res.end();
})

app.post("/myemail",(req,res)=>{
    res.write("post email is test@gmail.com");
    res.end();
})

app.post("/login",(req,res)=>{
    let {email,password} = req.query;
    let msg = userServiceObj.login(email,password);
    res.write(msg);
    res.end();
})

app.get("/getUser",(req,res)=>{
    let details = [
        {"id":1,"name":"sharanya"},
        {"id":2,"name":"pavani"},
        {"id":3,"name":"3434"},
        {"id":1,"name":"skjhj"}
    ]

    let {id} = req.query;
    if(id != undefined){
        let user = details.filter((user)=>user.id==id);
        res.json(user);
    }else{
          res.json(details);
        }
    res.end();
})

app.put("/myemail",(req,res)=>{
    res.write("put email is test@gmail.com");
    res.end();
})

app.delete("/myemail",(req,res)=>{
    res.write("delete email is test@gmail.com");
    res.end();
})

app.listen(8080,()=>{
    console.log("server is created..");
})