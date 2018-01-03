const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// using destructing 
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String
});

mongoose.model('users', userSchema);