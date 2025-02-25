/*when to use post request
 1.if you want to change the state of the server
 2.if you want to hide the data

 */     
 const express=require("express")
 const app=express()
 app.use(express.urlencoded({extended:true}))
 let userData=[]
 app.get("/adduser",(req,res)=>{
     res.sendFile(__dirname+"/register.html")
 })
 app.post("/adduser",(req,res)=>{
     let{name,email,password}=req.body
     // console.log(name,email,password);
     userData.push({name:name,email:email,password:password})
     console.log(userData);
     res.send(userData)
     
     
 })
 app.listen(3017,()=>{
     console.log("server started");
     
 })