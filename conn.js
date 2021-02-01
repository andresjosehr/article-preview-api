const mongoose = require('mongoose')
require('dotenv').config();

const db_path = process.env.MONGODB_CONNECTION
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(db_path, config).catch(err => console.log(err))

mongoose.connection.once("open", _ =>{
    console.log("Mongoose connected")
})

mongoose.connection.on("error", error =>{
    console.log(error)
})