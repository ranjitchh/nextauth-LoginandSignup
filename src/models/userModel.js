import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "provide a password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgetPasswordoken:String,
  forgetPasswordokenExpiry:Date,
  verifyToken:String,
  verifyTokenExpiry:Date,
  
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
