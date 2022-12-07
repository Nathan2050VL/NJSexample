const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productShema = new Schema({
    title: {
        type: String,
        require:true
    },
    price: {
        type: String,
        require:true
    },
    description: {
        type: String,
        require:true
    },
    imageUrl: {
        type: String,
        require:true
    },
    userId: {
        type: Schema.type.ObjectId,
        require: true,
        ref:'User'
    }
})
module.exports=mongoose.model('Product',productShema)