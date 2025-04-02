var exp = require("express");
var cors = require("cors");
const { MongoClient } = require('mongodb');

var app = exp();

app.use(cors())//to allow client request
app.use(exp.json());//to allow the req body

const url ='mongodb+srv://sharanyanakka2005:Sharanya_2005@cluster0.atjli.mongodb.net/';
const client = new MongoClient(url);

const dbName = 'registration-form';

app.post("create",async (req,res)=>{
    let {Name,Email,Mobile,City} = req.body;
    await client.connect();

    const db = client.db(dbName);
    await db.collection("details").insertOne({"Name":Name,"Email":Email,"Mobile number":Mobile,"City":City})
    res.json({"message":"your details are uploaded!!"});
    res.end();
    
})

app.get("get",async (req,res)=>{
    await client.connect();

    const db = client.db(dbName);
    let data = await db.collection("details").find({}).toArray();
    res.json(data);
    res.end();
    
})
app.listen(8080,()=>console.log("server is started!!"));