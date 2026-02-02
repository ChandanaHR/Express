//app.js
const express = require("express")
const Student = require("./Student")
const app = express();
app.use(express.json());
app.post("/students", async(req,res)=>{
    const student = new Student(req.body)
    await student.save();
    res.send(student)
})
app.get("/students",async(req,res)=>{
    const students = await Student.find();
    res.send(students)
})
app.put("/students/:id", async(req,res)=>{
    try {
        const user = await Student.findByIdAndUpdate(
            req.params.id,
            {$set: {name : req.body.name}},
            {new : true}
        );
        if(!user) {
            res.status(404).json({message: "User not found"})
        }
        res.json(user)
    } catch(err) {
        res.status(400).json({error: err.message})
    }
});
app.delete("/students/:id",async(req,res)=>{
    await Student.findByIdAndDelete(req.params.id);
    res.send("Student deleted")
})
app.listen(3000,()=>{
    console.log("Server running on port 3000")
})
require("./db")


//Student.js
const mongoose = require("mongoose")
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});
module.exports = mongoose.model("Student",studentSchema)

//db.js
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
  .then(()=>console.log("MongoDB connected successfully"))
  .catch(err => console.error(err))
