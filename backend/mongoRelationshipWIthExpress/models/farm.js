const mongoose = require('mongoose');
const product = require('./product');

const { Schema } = mongoose;

const farmSchema = new Schema({
    name:{
        type: String,
        required: [true,'Farm must have a name!']
    },
    city:{
        type: String,
    },
    email:{
        type: String,
        required: [true,'Email required']
    },
    products:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

farmSchema.post('findOneAndDelete',async (farm)=>{
    if(farm.products.length){
        const res = await product.deleteMany({_id : {$in : farm.products}})
    }
})
const Farm = mongoose.model('Farm', farmSchema);
 
module.exports = Farm;