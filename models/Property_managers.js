const mongoose = require('mongoose')

const properties = mongoose.Schema(
    { text: String }
)

module.exports = mongoose.model('properties', properties)