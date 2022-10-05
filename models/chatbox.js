const mongoose = require('mongoose')


const ChatBoxSchema = new mongoose.Schema(
    {   input : {type:String} }
)

module.exports = mongoose.model('ChatBox', ChatBoxSchema)