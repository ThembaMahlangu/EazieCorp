const mongoose = require('mongoose')

const properties = mongoose.Schema(
    { text: String },
    {timestamps: true}
)

module.exports = mongoose.model('properties', properties)