const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema(
    {
        item_name : String,
        purchase_from: String,
        purchase_date : String,
        purchased_by : String,
        amount  : Number,
        paid_by : String,
        status: String,
        file_upload: String,
        
    })

module.exports = mongoose.model("expense", expenseSchema)