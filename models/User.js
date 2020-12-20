const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "created",
  },
  createdDate: {
      type: Date,
      default: Date.now
  }
});

module.exports = User = mongoose.model("User", schema);