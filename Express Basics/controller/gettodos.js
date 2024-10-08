const todo = require("../models/todo");


//define handler
exports.gettodos = async(req,res) => {
    try{
        //fetch all data
        const response = await todo.find({});
        res.status(200)
        .json({
            sucess:true,
            data:response,
            message:'Entire data fetched',
        });

        //response

    }
    catch(err){
        console.log(error);
        process.exit(1);
    }
}

   //update a todo
exports.updatetodo = async(req,res) => {
    try{
        //fetch all data
        const {id} = req.params;
        const {title,description} = req.body;
        const response = await todo.findByIdAndUpdate({_id:id},{title,description,updatedAt:Date.now()},);
        res.status(200)
        .json({
            sucess:true,
            data:response,
            message:'Entire data fetched',
        });

        //response

    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

//fetch one todo handler\
exports.getonetodo = async(req,res) => {
    try {
        const id = req.params.id;
        const response = await todo.findById({_id:id});
        if(!response) {
            return res.status(400).json({
                sucess:false,
                message:"no data found"
            });
        }
        res.status(200).json({
            sucess:true,
            data:response,
            message:'data fetched by id success',
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
}