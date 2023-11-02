// create a http server using node js 

const http = require('http'); 

const {createfun,readfun,updatefun,deletefun}  = require('./newModule.js');

const server = http.createServer(function(req,res){
    console.log(req.method,req.url);
    if(req.url == '/create'&& req.method == 'POST'){
        res.write(JSON.stringify(createfun(10)))
    } else if (req.url == '/read'&& req.method == 'GET'){
        res.write(JSON.stringify(readfun()))
    } else if (req.url == '/update'){
        res.write(JSON.stringify(updatefun(0,100)))
    } else if (req.url == '/delete'){
        res.write(JSON.stringify(deletefun(0)))
    }
    

   // if(req.url == "/"){
    //    res.write("request looks good ")
   // }else if (req.url =='/pizza'){
      //  res.write("pizza is ready!")
   // }else{
       // res.write("Request not supported" )
   // }


    
    res.end();

})

server.listen(5000, function(){
    console.log("server running on port 5000!")
});
