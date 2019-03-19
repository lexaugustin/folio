const   express     = require('express'),
        mongoose    = require('mongoose'),
        bodyParser  = require('body-parser');

        auth = require('./routes/api/users'),
        profile = require('./routes/api/profile'),
        posts = require('./routes/api/posts');


const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



// Database Config
const db = require('./config/config').mongoURI;

// Connect to MongoDB using Mongoose
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log("Connected to MongoDB succesfully"))
    .catch(err => console.log(err));

app.get('/', function(req, res){
    res.send("Hello World BBB CCCC");
});

//Use routes
app.use('/api/users', auth);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


// Start server
const port = process.env.PORT || 5000;
app.listen(port, function(req, res){
    console.log("The server has started on port ${port}");
});