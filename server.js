const express = require("express");

const mongoose=require("mongoose");

// const todo=require("./models/todo.js");
const todo = require("./models/todo");
console.log("TODO =", todo);
console.log("TYPE =", typeof todo);
console.log("CREATE =", typeof todo.create);
console.log("FIND =", typeof todo.find);

// mongoose.connect("mongodb://127.0.0.1:27017/todolist");
mongoose.connect("mongodb://127.0.0.1:27017/todolist")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });

const app = express();
const PORT = 3001;

app.use(express.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Express is working!");
});

let arr=[
    {
        title:"learn express",
        priority:"high",
        date:"28082026",
        completed:false
    }
];
app.post("/todo", async(req, res) => {
    console.log(req.body);
    const newtodo= await todo.create(req.body);
    res.json(newtodo);
});
// app.post("/todo",(req,res)=>{
//     res.send(arr);
// })
app.get("/todo",async(req,res)=>{
    let find= await todo.find({});
    res.json(find);
})

app.patch("/todo/:id", async (req, res) => {

    let updatedTodo = await todo.findByIdAndUpdate(
        req.params.id,
        { completed: req.body.completed },
        { new: true }
    );

    res.json(updatedTodo);
});

app.delete("/todo/:id",async(req,res)=>{
     let deletetodo= await todo.findByIdAndDelete(req.params.id);
     res.json(deletetodo);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});