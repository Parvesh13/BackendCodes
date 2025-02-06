const express=require("express")
const app=express()
// app.get("/profile",(req,res)=>{
//     const{username,age}=req.query
//     res.send("profile page of"+" "+username+" "+age)
// })
app.get("/profile/:id/:username",(req,res)=>{
    const{id,username}=req.params;
    //find in database
    res.send("profile page of"+" "+id+" "+username)
})
app.listen(3019,(req,res)=>{
    console.log("server Started");
    
}

)