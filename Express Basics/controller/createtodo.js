const todo = require("../models/todo");

exports.createtodo = async(req,res) => {
    try {
        const {title,description} = req.body;
        const response = await todo.create({title,description});
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Successfully'
            }
        );
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}