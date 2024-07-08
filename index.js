require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const newsRoute = require("./controller/newsRoute");
const cors = require("cors");
const bodyparser=require("body-parser")


const app=express();


mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://keerthanat2021:Keervit21.@cluster0.2hbdyej.mongodb.net/news");
var db=mongoose.connection;
db.on("open",()=>console.log("Connected to DB"))
db.on("error",()=>console.log("Not Connected to DB"))

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());
app.use("/newsRoute",newsRoute);


app.listen(4000,()=>{
    console.log("Server is running in the port 4000");
})
