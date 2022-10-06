const mongoose = require('mongoose')

const users = mongoose.userSchema(

)

module.exports = mongoose.model('users', userSchema)