// function middlename(req,res,next) {
//     next();
// }
const express = require('express')
const app = express()
const morgan = require("morgan")
const router = express.Router();
// const logger = (req,res,next)=>{
//     console.log(`${req.method} ${req.url}`)
//     next()
// }
// router.use((req,res,next)=>{
//     console.log("Router level middleware")
//     next()
// })
// router.get("/profile",(req,res)=>{
//     res.send("I am in profile page")
// })
// router.get("/Projects",(req,res)=>{
//     res.send("I am in Projects page")
// })
// app.get('/user',(req,res,next)=>{
//     const err = new Error("Something error")
//     next(err)
// })
// //  app.use("/user",router)
// app.use((err,req,res,next)=>{
//     console.error(err.message)
//     res.status(500).send("Internal server error")
// })
//  app.get("/",(req,res)=>{
//     res.send("Home page")
//  })
app.use(morgan("dev"))
app.get("/",(req,res)=>{
    res.send("Home page")
})
 app.listen(3000)
