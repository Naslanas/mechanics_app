const mongoose=require("mongoose")
const mechanicSchema=new mongoose.Schema({
    name:String,
    emp_id:String,
    location:String,
    Experience:String
})

module.exports=mongoose.model("mechanics",mechanicSchema)