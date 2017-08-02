const User       = require('../models/user')
const passport   = require('passport')
const controller = {
	
	viewSignup(req,res){
	res.render('signup');
},

 	signup(req,res){
  req.body.username
  req.body.fullname
 	req.body.email
  req.body.password
    //here store only the username in the database without password coz if we store the password in the database probley it will hack
    var newUser = new User({username: req.body.username,fullname:req.body.fullname,email:req.body.email})
    User.register(newUser,req.body.password,function(err,user){
      if(err){
        console.log(err);
        return res.render('signup')
      }
      passport.authenticate("local")(req,res,function(){
        res.redirect("/")
      });
    
 })
 },	
    
	viewLogin(req,res){
	res.render('login');
},

   	logout(req,res){
      req.logout();
      res.redirect("/");
  },

  viewSecret(req,res){
  	res.render('secret')
  },

  isLoggedIn(req,res,next){
      console.log(req.isAuthenticated())
      if(req.isAuthenticated()){
        return next();
      }
      res.redirect("/login")
    },

    marker(req, res) {
      console.log(req.body)
    }
  


  
}
module.exports = controller;