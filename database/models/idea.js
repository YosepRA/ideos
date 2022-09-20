const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const ideaSchema = new Schema({
  title: String,
  description: String,
  created: { type: Date, default: Date.now },
});

const Idea = model('Idea', ideaSchema);

module.exports = Idea;
