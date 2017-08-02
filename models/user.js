var mongoose              = require('mongoose')
var Schema                = mongoose.Schema
var passportLocalMongoose = require('passport-local-mongoose')

var UserSchema = new Schema({
  username: String,
  fullname: String,
  email: String,
  password: String
})
UserSchema.plugin(passportLocalMongoose);
const User = mongoose.model('user',UserSchema)

module.exports = User;
