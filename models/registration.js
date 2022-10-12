
const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")


const add_userSchema = new mongoose.Schema(
    
    {   Username : {type:String},
        email: {type:String},
        password : {type: String},}

)

const add_companySchema = new mongoose.Schema(
    
    {   company_name : {type:String},
        company_location: {type:String},
    }

)

module.exports = mongoose.model('add_user', add_userSchema)
module.exports = mongoose.model('add_company', add_companySchema)