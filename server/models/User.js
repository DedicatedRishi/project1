const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required:false,
    unique: true,
  },
  role: String,
  type: String,
  teamLeaderName: String,
  members: [String],
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobileNo: String,
  password: String,
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
  },
  
});

const UserModel = mongoose.model('users', userSchema);
module.exports = UserModel
