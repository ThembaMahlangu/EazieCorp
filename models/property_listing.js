const mongoose = require('mongoose')


const properties_listing = new mongoose.Schema(
    { text: {type:String, required: true} },
    { address: {type:String} },
)

module.exports = mongoose.model('properties_listing', properties_listing)