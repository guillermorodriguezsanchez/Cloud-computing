/* eslint-disable prettier/prettier */
const { Schema, model } = require("mongoose");

// Creating the model of Event
const VideoGameSchema = Schema({
  _id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  ageToPlay: {
    type: Number,
  },
  amount: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

VideoGameSchema.method("toJSON", function () {
  // eslint-disable-next-line no-unused-vars
  const { __v, ...object } = this.toObject();
  return object;
});

module.exports = model("VideoGame", VideoGameSchema);
