const express             = require('express')
const app                 = express()
var passport              = require('passport')
var bodyParser            = require('body-parser')
var LocalStrategy         = require('passport-local')
var passportLocalMongoose = require('passport-local-mongoose')
var users                 = require('./routes/users')
var mongoose              = require('mongoose')
    mongoose.Promise      = global.Promise  
var User                  = require('./models/user')
app.use(express.static(__dirname + '/public'));
// mongoose.connect('mongodb://localhost/hayat',{
//   useMongoClient: true
// })
//i have to ask lourens tommorwo about to hide the this link
// mongoose.connect('mongodb://<yasser>:<admin>@ds129333.mlab.com:29333/hayat-project',{
// 	 useMongoClient: true
// })
mongoose.connect(process.env.mlab || "mongodb://localhost/hayat",{
	useMongoClient: true
})
//configre ejs
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(require('express-session')({
	secret: "yasser",
	resave: true,
	saveUninitialized: true
})); 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
app.use(function(req,res,next){
	res.locals.currentUser = req.user;
	next();
})
app.get('/', function(req,res){
	res.render('index')
})
app.use('/',users)



// app.listen(3000, () => {
//   console.log('Listening on port 3000')
// })
var port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Listening on port ' + port)
})
module.exports = app;
