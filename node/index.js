var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/ryzaq',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose.connection;
db.createCollection('Students')
console.log("Collection Create")