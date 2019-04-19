const   express     = require('express'),
        mongoose    = require('mongoose'),
        bodyParser  = require('body-parser'),
        passport    = require('passport'),

        users = require('./routes/api/users'),
        profile = require('./routes/api/profile')


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

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);


// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, process.env.IP, function () {
    console.log(`The server has started successfully on Port: ${PORT}`);
});