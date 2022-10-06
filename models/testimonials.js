const mongoose = require('mongoose')


const testimonialsSchema = new mongoose.Schema(
    {   
        name : {type:String},
        occupation: {type: String},
        input : {type:String}


    }
)

module.exports = mongoose.model('testimonials', testimonialsSchema)