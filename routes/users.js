const express         = require('express')
const router          = express.Router()
const usersController = require('../controllers/users_controller')
const passport        = require ('passport')
 router.get('/secret',usersController.isLoggedIn,usersController.viewSecret)
 router.get('/signup', usersController.viewSignup)
 router.post('/signup',usersController.signup)
 router.get('/login', usersController.viewLogin)
 router.post('/login' ,function(req,res,next){
    passport.authenticate("local",
    {
    	successRedirect: "/secret",
    	failureRedirect: "/login"
  	}
   )(req,res,next) 
   	// body...
   });
 router.get('/logout',usersController.logout)
module.exports  = router