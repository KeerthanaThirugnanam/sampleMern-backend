const express = require("express");
const sportsSchema = require("../DB model/sportsSchema.js");
const { default: mongoose } = require("mongoose");

const newsRoute = express.Router();

newsRoute.post("/createnews",(req,res)=>{
    sportsSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data)
    })
})

newsRoute.get("/",(req,res)=>{
    sportsSchema.find((err,data)=>{
        if(err)
            return err
        else
            res.json(data)
    })
})

newsRoute.route("/updatenews/:id")
.get((req,res)=>{
    sportsSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
        res.json(data);
    })

})
.put((req,res)=>{
    sportsSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set:req.body},
    (err,data)=>{
        if(err)
            return err
        else
            res.json(data)
    })

})
newsRoute.delete("/deletenews/:id",(req,res)=>{
    sportsSchema.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id),
        (err,data)=>{
            if(err)
                return err
            else
                res.json(data)
        }
    )
})

module.exports = newsRoute;
