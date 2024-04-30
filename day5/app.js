var express=require("express")
var bodyParser=require("body-parser")
var mongoose = require('mongoose')

const app=express()

app.use(bodyParser.json())
app.use(express.static('public'))

app.use(bodyParser.urlencoded({
    extended: true
}))
mongoose.connect('mongodb://127.0.0.1:27017/ryzaq',
{
    useNewUrlParser: true,
    useUnifiedTopology:true
});

var db=mongoose.connection;
db.on('error',()=>console.log("connection error"));
db.once('open',()=>console.log("connection succeeded"));

app.post("/signup",(req,res)=>{
    var fname=req.body.fname;
    var lname=req.body.lname;
    var email=req.body.email;
    var date=req.body.date;
    var address=req.body.address;

    var data ={
        "fname":fname,
        "lname":lname,
        "email":email,
        "DOB":date,
        "address":address
    }
    db.collection('users').insertOne(data,(err, collection)=>{
        if (err){
            throw err;
        }console.log("Record inserted successfully");
    });
    return res.redirect('home.html')
})

app.get("/",(req,res)=>{
    res.set({
        "Access-control-Allow-Origine":'*'
    })
    return res.redirect('index.html');
}).listen(3000)
console.log("server listening at port 3000");
