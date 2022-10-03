const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://eazierentals:EAZIE_rentals22@cluster0.ifim4qy.mongodb.net/?retryWrites=true&w=majority")

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
