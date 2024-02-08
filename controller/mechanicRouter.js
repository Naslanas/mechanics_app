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

router.get("/view",async(req,res)=>{
    let data=await mechanicModel.find()
    res.json(data)
})

router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await mechanicModel.find(input)
    res.json(data)
})

module.exports=router