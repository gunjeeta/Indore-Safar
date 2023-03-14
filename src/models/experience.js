const mongoose=require("mongoose")
const exp=mongoose.Schema({
    name:String,
    email:String,
    experience:String,
    rating:Number
})
module.exports=mongoose.model("rating",exp);