var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/ryzaq',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose.connection;
data={name:"kishore",age:20,city:"salem"}

db.collection('Students').insertOne(data)
console.log("record inserted")
