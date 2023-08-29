const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    email: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 4,
      default: 'Unnamed assignment',
    },
    thoughts: {
      type: Number,
      required: true,
      default: () => Math.floor(Math.random() * (100 - 70 + 1) + 70),
    },
    friends: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals:: true,
    },
    id: false,
  }
);

module.exports = User;
