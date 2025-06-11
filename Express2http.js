//get and post requests
//index.js
const express = require('express')
const router = require("./route.js")
const app = express()
const PORT = 3000
app.get('/',(req,res)=>{
    res.send("HELLO EXPRESS WORLD")
})
app.use('/user',router)

app.post('/users',express.json(),(req,res)=>{
    const {name,email} = req.body
    res.json({
        message: `User with ${name} has registered with mail id ${email}`
    })
})
app.listen(PORT,()=>{
    console.log(`Server is running on the port http://localhost:${PORT}`)
})
//postman api
{
    "name":"chandu",
    "email" : "ch@gmail.com"
}

//put requests
app.put('/users/:id',express.json(),(req,res)=>{
    const userid = req.params.id
    const {name,email} = req.body
    res.json({
        message: `User with ${name} and user id ${userid} has registered with mail id ${email}`
    })
})

//delete api
app.delete('/users/:id',express.json(),(req,res)=>{
    const userid = req.params.id
    res.json({
        message: `User with id ${userid} deleted successfully`
    })
})
//We can use app.use(express.json())
