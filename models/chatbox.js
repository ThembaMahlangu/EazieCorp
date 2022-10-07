const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema(
    {
        chat_text: String,
    })

module.exports = mongoose.model("chat", chatSchema)