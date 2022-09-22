const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const ideaSchema = new Schema({
  title: String,
  description: String,
  created: { type: Date, default: Date.now },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Idea = model('Idea', ideaSchema);

module.exports = Idea;
