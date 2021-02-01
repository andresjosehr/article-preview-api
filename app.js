const express    = require("express");
const app        = express();
const bodyParser = require("body-parser")
const conn       = require("./conn")
const apiRoutes  = require("./routes/api")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
  });
  
app.use("/api", apiRoutes)
app.use("/images",express.static('public/images'));


app.post("/",(req, resp) =>{


    resp.status(200)
    resp.send("Works")

})


const server = app.listen(process.env.PORT || 8000, () => console.log(`Listen at port ${server.address().port}`))