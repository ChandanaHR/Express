const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.end("Hello Hi good morning")
})

app.get("/about",(req,res)=>{
    res.end("I am in about page")
})

app.get("/about1",(req,res)=>{
    res.end("I am in about1 page")
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

// app.METHOD(Path, Handler)
