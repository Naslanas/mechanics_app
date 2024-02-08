const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const mechanicRoute=require("./controller/mechanicRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://nasla:nasla1711@cluster0.f8gbros.mongodb.net/mechanicDb?retryWrites=true&w=majority",{
    useNewUrlParser:true
})

app.use("/api/mechanic",mechanicRoute)

app.listen(3001,()=>{
    console.log("Server running")
})