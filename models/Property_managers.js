const mongoose = require('mongoose')


const properties_managers = new mongoose.Schema(
    {ComponyName: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    }}

)

module.exports = mongoose.model('properties_managers', properties_managers)