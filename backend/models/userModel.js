const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    //maintaining relationships between user and their blogs via mongoose
    blogs: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Blog",
        //required: [true, "blog id is required"], -->not required since one user might not have posted any blog
      },
    ],
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
