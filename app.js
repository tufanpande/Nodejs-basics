const http =require("http");
const library = require("./index1.js");//{propercase}

http.createServer((req, res)=>{
    res.writeHead(200, {"conetnt-Type":"tex/html"});
    const updateMsg = properCase("Hi from srever");
    library.getHello();
    res.end(updateMsg);
})
.listen(5500);
console.log("hello i m running");