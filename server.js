var http=require('http')
var fs=require('fs')

http.createServer(function(req,res){
    
    if(req.url==='/' || req.url==='/home'){
        fs.readFile('index.html',function(err,data){
            res.writeHead(200,{'content-type' : 'text/html'})
            res.write(data)
            res.end()
        })
    }
    
    else if(req.url==='/signup'){
        fs.readFile('signup.html',function(err,data){
            res.writeHead(200,{'content-type' : 'text/html'})
            res.write(data)
            res.end()
        })
    }

    else{
        res.writeHead(404,{'content-type' : 'text/html'})
        res.write('<h1 style="align : center;"><b>404 Page Not Found...!</b></h1>')
        res.end()
    }

}).listen(5432,function(){
    console.log("Server started...")
})