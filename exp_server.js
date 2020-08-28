var exp=require('express')
a=exp()

a.get('/',function(req,res){
	res.send("<h1>Home</h1>")
})

a.listen(3000,()=>{
	console.log("Server started...!")
})