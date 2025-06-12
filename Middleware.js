//Middle ware are the functions that execute before the final request handler.
// * Modify the request and response objects
// * End the request-response cycle
// * Call the next middleware function in stack
//workflow - > Client request-> Middleware -> Route handler -> Response to client

app.use((req,res,next)=>{
    console.log(`A new request received at` +Date.now())
    next()
})

//Application level middleware - applies to all routes in an app -> app.use(loggermiddleware)

//Router-level middleware - Applies to specific route groups - router.use(authmiddlware)

//Built-in middleware - Comes with express -> app.use(express.json())

//Third party middleware - External libraries we have to install -> app.use(cors())

//Error-handling middlewares - Handles error in the request lifecycle -> app.use(errorhandler)

//Adding route to middleware
app.use('/welcome',(req,res,next)=>{
    console.log(`A new request received at` +Date.now())
    next()
}) //This is middleware
app.get('/welcome',(req,res)=>{
    res.send("Welcome to express app")
}) //This is route
