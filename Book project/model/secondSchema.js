const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    book : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    }
})

const secondschema = mongoose.model("Book", schema)

module.exports = secondschema