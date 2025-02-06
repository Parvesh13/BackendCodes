const express = require('express');
const app=express();
app.use(m1);
app.use(m2);
app.use(m3);
app.use(m4);



app.get('/',(req,res)=>{
    res.send("server Started")
})
app.get('/about',m4,(req,res)=>{
    res.send("About page")
})
function m1(req,res,next){
    console.log("Middleware1 Created")
    next();
}
function m3(req,res,next){
    console.log("Middleware3 Created")
    next();
}
function m4(req,res,next){
    console.log("Middleware4 Created")
    next();
}
function m2(req,res,next){
    console.log("Middleware2 Created")
    next();
}
app.listen(3000,()=>{
    console.log("server started")
})