// const http = require("http");
// const port = 2005;

// const portHandler = (req, res) => {
//     res.write("hello server \n ")
//     res.write("hello server \n ")
//     res.write("hello server")
//     res.end()    
// }

// const server = http.createServer(portHandler);

// server.listen(port,(err)=>{
//     err ? console.log(err) : console.log("server is running on port " , port)
// })







const http = require("http")
const port = 2008

const portHandler = (req,res)=>{
    res.write("hello server \n")
    res.write("hello server \n")
    res.write("hello server")
    res.end()
}

const server = http.createServer(portHandler)

server.listen(port,(err)=>{
    err ? console.log(err) : console.log("server is running on port " , port)
})