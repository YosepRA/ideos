const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema, model } = mongoose;

const ideaSchema = new Schema({
  title: String,
  description: String,
  created: { type: Date, default: Date.now },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
});

ideaSchema.plugin(mongoosePaginate);

const Idea = model('Idea', ideaSchema);

module.exports = Idea;
