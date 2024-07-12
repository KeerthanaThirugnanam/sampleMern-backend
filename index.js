// import express from "express"
const express =require("express") 
// import bcrypt from "bcrypt"
const bcrypt=require("bcrypt")
// import cors from "cors"
const cors =require("cors") 

const newsRoute = require("./controller/newsRoute");
const bodyparser=require("body-parser")
const mongoose = require("mongoose");

// import newsRoute from "./controller/newsRoute.js"
// import bodyparser from 'body-parser';
// import mongoose from "mongoose"

const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb+srv://keerthanat2021:Keervit21.@cluster0.2hbdyej.mongodb.net/news")
var db=mongoose.connection;
db.on("open",()=>console.log("Connected to DB"))
db.on("error",()=>console.log("Not Connected to DB"))
// .then(()=>{
// console.log("mongodb connected");
// })
// .catch(()=>{
// console.log('failed');
// })

// const newSchema=new mongoose.Schema({
// "email":{type: String,required: true},
// "password": {type: String,required: true}
// },{
//     collection:"collection"
// })

// const collection=mongoose.model("collection",newSchema)


app.get("/",cors(),(req,res)=>{
  
})

app.post("/login", async(req,res)=>{
    const{email, password}=req.body



    try{
        const check=await collection.findOne({email: email,password:password})

        if(check){
            
          

            const passwordMatch = bcrypt.compare(password, check.password);
    
            if (passwordMatch) {
                console.log("Password is correct.");
                res.json("exist");
            }else {
                console.log("Incorrectpassword");
                res.json("Inncorrectpassword");
            
            }

        }

        else{
            res.json("Not exist")
            
        }
   
   
   
    }

    catch(e){
        res.json("notexist")
        console.log("other error")

    }
})




app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

      const data={
        email:email,
        password:password

      }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("Not exist")
            await collection.insertMany([data])
        }
    }

    catch(e){
        res.json("notexist")

    }
})





mongoose.set("strictQuery",true);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());
app.use("/newsRoute",newsRoute);
// app.use("/login",)



// app.listen(8000,()=> {
//     console.log("port connected")
// })


app.listen(4000,()=>{
    console.log("Server is running in the port 4000");
})