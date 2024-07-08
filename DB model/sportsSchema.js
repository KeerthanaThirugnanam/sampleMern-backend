const mongoose = require("mongoose");
const sportsSchema = new mongoose.Schema({
    "url":{type:String},
    "headline":{type:String},
    "source":{type:String},
    "category":{type:String}
},{
    collection:"sports"
})


module.exports = mongoose.model("sportsSchema",sportsSchema);
