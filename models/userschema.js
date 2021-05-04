const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true,
        minLength : 3
    },
    email : {
        type : String
    },
    phoneNo : {
        type : String,
        maxLength : 10
    }

})

const User = mongoose.model('heroku-demo-user',UserSchema)
module.exports = {
    User
}