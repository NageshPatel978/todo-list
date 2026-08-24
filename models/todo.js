const mongoose=require("mongoose");

const todoSchema=new mongoose.Schema({
 title:String,
        priority:String,
        date:String,
        completed:Boolean
});

const todo =mongoose.model("todo",todoSchema);

module.exports=todo;