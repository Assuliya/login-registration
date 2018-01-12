var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: [true, "Email is requird"],
    minlength: [5, "Email can't be less than 5"],
    unique: true
  },
 first_name: {
   type: String,
   trim: true,
   required: [true, "First name is requird"],
   minlength: [3, "First name can't be less than 3"],
 },
 last_name: {
   type: String,
   trim: true,
   required: [true, "First name is requird"],
   minlength: [3, "First name can't be less than 3"],
 },
 password: {
   type: String,
   trim: true,
   required: [true, "First name is requird"],
   minlength: [3, "First name can't be less than 3"],
 },
 birthday: {
   type: Date,
   required: [true, "Your date of birth is requird"],
 },

}, {timestamps: true });

var User = mongoose.model('User', UserSchema);

UserSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
