"use client"
import { useState} from "react";
import './App.css';

function App() {
  const [Name,setName] = useState();
  const [Email,setEmail] = useState();
  const [Mobile,setMobile] = useState();
  const [City,setCity] = useState();
  const post = async ()=> {
    let data = {
      "Name":Name,
      "Email":Email,
      "Mobile":Mobile,
      "City":City
    }
    let res = await fetch("http://localhost:8080/create",{"method":"POST",body:JSON.stringify(data),headers:{"content-type":"application/json"}});
    let json = await res.json();
    console.log(json);
  }
  return (
    <div>
       <h1>Registration Form </h1>
       <div className="div">
         <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name"/>
       </div>
       <div className="div">
         <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email"/>
       </div>
       <div className="div">
         <input onChange={(e)=>setMobile(e.target.value)} type="text" placeholder="Mobile number"/>
       </div>
       <div className="div">
         <input onChange={(e)=>setCity(e.target.value)} type="text" placeholder="City"/>
       </div>
       <div>
         <button onClick={post}>Submit</button>
       </div>
    </div>

    
  );
}

export default App;
