const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: String,
  ideas: [{ type: Schema.Types.ObjectId, ref: 'Idea' }],
});

userSchema.plugin(passportLocalMongoose);

const User = model('User', userSchema);

module.exports = User;
