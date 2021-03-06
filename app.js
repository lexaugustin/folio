const   express     = require('express'),
        mongoose    = require('mongoose'),
        bodyParser  = require('body-parser'),
        passport    = require('passport'),

        auth = require('./routes/api/users'),
        profile = require('./routes/api/profile'),
        posts = require('./routes/api/posts');


const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



// Database Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB using Mongoose
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log("Connected to MongoDB succesfully"))
    .catch(err => console.log(err));

// Passport Middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

//Use routes
app.use('/api/users', auth);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("The server has started on port ${port}");
});