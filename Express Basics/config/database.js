const mongoose = require("mongoose");

require("dotenv").config();

const dbconnect = () => {
    mongoose.connect(process.env.DB_URL, {
        UseNewUrlParser:true,
        UseUnifiedTopology:true,
    })
    .then( () => console.log("connected"))
    .catch( (error) => {
        console.log("error has occured");
    })
}

module.exports = dbconnect;