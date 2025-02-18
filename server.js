const express=require("express")   ;
const app=express();
app.get("/adduser",(req,res)=>{
    res.sendFile(__dirname+"/register.html")
})
app.post("/adduser",(req,res)=>{
    res.send("user added")
})
app.listen(2914,(req,res)=>{
    console.log("server Started");
    
}