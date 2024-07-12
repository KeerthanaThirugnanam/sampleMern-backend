const mongoose = require("mongoose");
const sportsSchema = new mongoose.Schema({
    "url":{type:String},
    "headline":{type:String},
    "source":{type:String},
    "category":{type:String}
},{
    collection:"sports"
})


const newSchema=new mongoose.Schema({
    "email":{
    type: String,
    required: true
    },
    "password": {
    type: String,
    required: true
}
module.exports=mongoose.model("collection",newSchema);
module.exports = mongoose.model("sportsSchema",sportsSchema);
