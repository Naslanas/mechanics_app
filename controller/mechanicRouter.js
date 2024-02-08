const express=require("express")
const mechanicModel = require("../Model/mechanicModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let mechanic=new mechanicModel(data)
    let result=await mechanic.save()
    res.json({
       status:"success"
})
})

module.exports=router