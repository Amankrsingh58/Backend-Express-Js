const express = require("express");
const router = express.Router();

//import controller

const {createtodo} = require("../controller/createtodo");
const {gettodos,getonetodo,updatetodo} = require("../controller/gettodos");

//define routes
router.post("/createtodo",createtodo);


//gettodo routes
router.get("/gettodos",gettodos);

//update todo
router.put("/updatetodo/:id",updatetodo);

//get single todo routes
router.get("/getonetodo/:id",getonetodo);
module.exports = router;