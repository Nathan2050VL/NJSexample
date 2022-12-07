const mongoose = require('mongoose')
const Shema = mongoose.Schema

const userShema = new Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    cart: {
        items: [{
            productId: {
                type: Shema.type.ObjectId,
                ref:'Product',
                require: true
            },
            quantity: {
                type: Number,
                require: true
            }

        }
            
        ],
    

    }
})

module.exports=mongoose.model('User',userShema)