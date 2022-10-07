const mongoose = require('mongoose')

const testimonialsSchema = new mongoose.Schema(
    {
        name: String,
        occupation: String,
        text_input : String,
    })

module.exports = mongoose.model("testimonials", testimonialsSchema)