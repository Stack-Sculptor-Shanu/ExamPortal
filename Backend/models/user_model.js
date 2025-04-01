const mongoose = require("mongoose");

const user_schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is Required']
    },
    email: {
      type: String,
      required: [true, 'Email is Required']
    },
    mobilenumber: {
      type: String,
      required: [true, 'Mobile is Required']
    },
    course: {
      type: String,
      required: [true, 'Course is Required']
    },
    role: {
      type: String,
      enum: ['SuperAdmin', 'admin', 'student'],
      default:"student",
      required: true
    },
    password: {
      type: String,
      required: [true, 'Password is required']
    }
  },
  {
    timestamps: true
  }
);

const users = mongoose.model('users', user_schema);
module.exports = users;
