import mongoose from "mongoose";

// schema for user information
const userSchema = new mongoose.Schema({
  // username of user
  username: {
    type: String,
    required: true,
    unique: true,
  },

  // email for login and register
  email: {
    type: String,
    required: true,
    unique: true,
  },

  // hashed password store here
  password: {
    type: String,
    required: true,
  },
});

// create user model
const User = mongoose.model("User", userSchema);

export default User;
