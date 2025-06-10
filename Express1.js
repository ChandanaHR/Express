const express = require('express')
const app = express()
const PORT = 3000
app.get('/',(req,res)=>{
    res.send("HELLO EXPRESS")
})
app.listen(PORT,()=>{
    console.log(`Server is running on the port http://localhost:${PORT}`)
})

//Routing in express js
const express = require('express')
const app = express()
const PORT = 3000
app.get('/',(req,res)=>{
    res.send("HELLO EXPRESS WORLD")
})
app.get('/about',(req,res)=>{
    res.send("This is about route")
})
app.get('/contact',(req,res)=>{
    res.send("This is contact route")
})
app.listen(PORT,()=>{
    console.log(`Server is running on the port http://localhost:${PORT}`)
})

//Dynamic routes and Query strings (Concept: Dynamic routing)
const express = require('express')
const app = express()
const PORT = 3000
app.get('/',(req,res)=>{
    res.send("HELLO EXPRESS WORLD")
})
app.get('/user/:username',(req,res)=>{
    const username = req.params.username;
    res.send(`Welcome ${username}`)
})
app.get('/search',(req,res)=>{
    const keyword = req.query.keyword;
    res.send(`Searching for ${keyword}`)
})
app.listen(PORT,()=>{
    console.log(`Server is running on the port http://localhost:${PORT}`)
})

//Adding in separate files 
//index.js
const express = require('express')
const { usercontroller, searchcontroller } = require('./controller')
const app = express()
const PORT = 3000
app.get('/',(req,res)=>{
    res.send("HELLO EXPRESS WORLD")
})
app.get('/user/:username',usercontroller)
app.get('/search',searchcontroller)
app.listen(PORT,()=>{
    console.log(`Server is running on the port http://localhost:${PORT}`)
})
//controller.js
export const usercontroller = (req,res)=>{
    const username = req.params.username;
    res.send(`Welcome ${username}`)
}

export const searchcontroller = (req,res)=>{
    const keyword = req.query.keyword;
    res.send(`Searching for ${keyword}`)
}

//creating multiple files
//controller.js
export const userlogin = (req,res)=>{
    //const username = req.params.username;
    res.send(`I am in userlogin page`)
}

export const signup = (req,res)=>{
    //const keyword = req.query.keyword;
    res.send(`I am in sign up page`)
}
//route.js
const express = require(`express`)
const { userlogin, signup } = require('./controller')
const router = express.Router()
router.get('/login',userlogin)
router.get('/signup',signup)
module.exports = router
//index.js
const express = require('express')
const router = require("./route.js")
const app = express()
const PORT = 3000
app.get('/',(req,res)=>{
    res.send("HELLO EXPRESS WORLD")
})
app.use('/user',router)
app.listen(PORT,()=>{
    console.log(`Server is running on the port http://localhost:${PORT}`)
})
