const express = require("express");
const app = express();

// load fron .env
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//to parse json
app.use(express.json());

//import toute for todo API
const todoroutes = require("./routes/todos");
app.use("/api/v1",todoroutes);

//start server
app.listen(PORT,() => {
    console.log(`server strt at ${PORT}`);
})

//connect to db
const dbconnect = require("./config/database");
dbconnect();

//defoult routes
// app.get("/", (req,res) => {
//     res.send(`<h1>homepage</h1>`);
// })