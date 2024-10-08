const mongoose = require("mongoose");

const todoSchma = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:20,
        },
        description:{
            type:String,
            required:true,
            maxLength:20,
        },
        creatAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);

module.exports = mongoose.model("todo",todoSchma);