const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = require("./User");

const ChatSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ["group", "private"]
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: User
    }
  ],
  messages: [
    {
      from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
      },
      text: String,
      date: {
        type: Date,
        default: Date.now()
      }
    }
  ]
});

module.exports = Chat = mongoose.model("chat", ChatSchema);
