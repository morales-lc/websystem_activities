const mongoose = require('mongoose') //import Mongoose
const{Schema} = mongoose //import Schema class


//The User Schema
const userSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    sex: { type: String, enum: ['Male', 'Female'] },
    birthday: { type: Date },
    username: { type: String },
    email: { type: String },
    password: { type: String },
    agreed: { type: Boolean, required: true }
})

//export model 
module.exports = mongoose.model ('User', userSchema)
