
const express = require("express")
const port = 2000
const path = require('path');   

const app = express();

app.use("/",express.static(path.join(__dirname,'public'))); // use to join files from public folder



server.listen(port,(err)=>{
    err ? console.log(err) : console.log("server is running on port " , port)
})