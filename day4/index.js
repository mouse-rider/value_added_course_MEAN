var express=require("express");
var app= express();
const port = 3000;

app.get('/',(req,res)=>res.send("Kishore Vishnu"));
app.listen(port,()=>console.log("server is running"));

