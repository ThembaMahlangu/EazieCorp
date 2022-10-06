
const mongoose = require('mongoose')


const add_buildingSchema = new mongoose.Schema(
    {   Building_Type : {type:String},
        Room_Type: {type:String},
        Rent : {type: Number},
        Rates: {type: Number},
        Total_Rent : {type: Number},
        Building_address: {type:String},
        image_upload : {type:String},})

module.exports = mongoose.model('add_building', add_buildingSchema)