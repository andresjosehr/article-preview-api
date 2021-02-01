const express    = require("express");
const app        = express();
const bodyParser = require("body-parser")
const conn       = require("./conn")
const apiRoutes  = require("./routes/api")


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/api", apiRoutes)

app.get("/", (req, resp) =>{
    
    resp.status(202)
    resp.send("working")
})


const server = app.listen(process.env.PORT || 8000, () => console.log(`Listen at port ${server.address().port}`))