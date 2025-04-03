const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const { MongoClient } = require('mongodb');


// Connection URL
const url = 'mongodb+srv://sharanyanakka2005:Sharanya_2005@cluster0.atjli.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'registration-form';

app.get("/getStudents",async(req,res)=>{
    
    await client.connect();
  //console.log('Connected successfully to server');
  const db = client.db(dbName);//select the database
  
  //find the records and return in the array format
  //let records = await db.collection('student').find().toArray();
  let records = await db.collection('student').find().toArray();
  res.json(records);
    
})
app.post("/createTeachers",async(req,res)=>{
    
  //destructuring
  let {name,email,address,mobile,password} = req.body;//recv the data from the request body
  await client.connect();

  const db = client.db(dbName);//select the database
  await db.collection("teacher").insertOne({"name":name,"email":email,"address":address,"password":password,"mobile":mobile});
  res.json({"message":"teacher is created!!"});
  res.end();
})

app.get("/getTeachers",async(req,res)=>{
    
  await client.connect();
//console.log('Connected successfully to server');
const db = client.db(dbName);//select the database

//find the records and return in the array format
//let records = await db.collection('student').find().toArray();
let records = await db.collection('teacher').find().toArray();
res.json(records);
  
})

app.post("/saveStudents",async(req,res)=>{
    
    let {email,name,mobile}=req.query;
    await client.connect();
  //console.log('Connected successfully to server');
  const db = client.db(dbName);//select the database
  
 await db.collection('student').insertOne({"email":email, "mobile":mobile, "name":name})
 res.json({"message":"student created !!!"});
    
})

app.post("/login",async(req,res)=>{

  //destructuring
  let {email,password} = req.body;
  await client.connect();
  const db = client.db(dbName);
  let teacher = await db.collection("teacher").find({"email":email,"password":password}).toArray();
  
  if(teacher.length ==1){
    res.json(teacher);
  }else{
    res.json({"message":"Your details are wrong!"})
  }
  res.end();
})

app.delete("/deleteTeachers",async(req,res)=>{
  //destructuring
  let {name} = req.query;
  await client.connect();

  const db = client.db(dbName);//select the database
  await db.collection("teacher").deleteOne({"name":name});
  res.json({"message":"teacher is deleted!!!"});//send the teachers list to the response
  res.end();
})

app.post("/create",async (req,res)=>{

  let {Name,Email,Mobile,City}= req.body; 
  // Use connect method to connect to the server
  await client.connect();

  const db = client.db(dbName);//select the database

  await db.collection('details').insertOne({"Name":Name,"Email":Email,"Mobile":Mobile,"City":City})
  
  res.json({"message":"created!!!"});//send the response to the client
})

app.get("/get",async (req,res)=>{
await client.connect();

const db = client.db(dbName);//select the database

let records =  await db.collection('details').find().toArray();
res.json(records);//send the response to the client
})


  

app.listen(8080,()=>{
    console.log("server is created..");
})