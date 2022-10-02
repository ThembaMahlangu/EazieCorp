const asyncHandler = require("express-async-handler")
const properties = require('../models/Property_managers')

const home = asyncHandler(async (req, res) =>{
    const property_managers = await properties.find();
    const create = properties.create({
        Text: "hello worlds"
    })
    res.status(200).json(property_managers)
})

const addManager = asyncHandler(async (req, res) =>{
    const create = properties.create({
        text: req.body.text
    })
    res.status(200).json(create)
})


module.exports = {
    home, addManager
}