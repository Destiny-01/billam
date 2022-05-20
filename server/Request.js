const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  totalAmount: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  donators: [
    {
      name: {
        type: String,
      },
      email: {
        type: String,
      },
      phone: {
        type: String,
      },
      amount: {
        type: String,
      },
    },
  ],
  userId: {
    type: mongoose.SchemaTypes.ObjectID,
    ref: "User",
  },
});

module.exports = mongoose.model("Request", requestSchema);
