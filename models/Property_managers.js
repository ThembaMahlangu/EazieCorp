const mongoose = require('mongoose')


const properties_managers = new mongoose.Schema(
    { text: {type:String, required: true} },
    { address: {type:String} },
)

module.exports = mongoose.model('properties_managers', properties_managers)