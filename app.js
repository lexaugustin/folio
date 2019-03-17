const   express = require('express'),
        mongoose = require('mongoose');


const app = express();

// Database Config
const db = require('./config/config').mongoURI;

// Connect to MongoDB using Mongoose
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log("Connected to MongoDB succesfully"))
    .catch(err => console.log(err));

app.get('/', function(req, res){
    res.send("Hello World BBB CCCC");
});

const port = process.env.PORT || 5000;
app.listen(port, function(req, res){
    console.log("The server has starte don port ${port}");
});