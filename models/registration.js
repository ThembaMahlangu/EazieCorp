
const mongoose = require('mongoose')


const add_userSchema = new mongoose.Schema(
    {   Username : {type:String},
        email: {type:String},
        password : {type: String},}

)

module.exports = mongoose.model('add_user', add_userSchema) 