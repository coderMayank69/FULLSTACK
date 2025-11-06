const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(()=>{
        console.log("Connection Open")
    })
    .catch(err=>{
        console.log("Error")
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    qty:{
        online:{
            type: Number,
            default: 0
        },
        inStore:{
            type: Number,
            default: 0
        }
    },
    onSale:{
        type: Boolean,
        default: false
    },
    categories:{
        type: [String],
        default: ['cycling']
    },
});

productSchema.methods.hello = function(){
    console.log("Hello!! HI!! Howdy!!");
    console.log(`- from ${this.name}`);
}

productSchema.methods.toggleOnSale = function(){
    this.onSale = !this.onSale;
    return this.save();
}
productSchema.methods.category =function (cat){
    this.categories.push('cat');
}
const Product = mongoose.model('Product', productSchema);
// const bike = new Product({ name:'Mountain Bike',price:599, categories:['cycling','fitness'] });
// bike.save()
//     .then(data=>{
//         console.log("Inserted")
//         console.log(data)
//     })
//     .catch(err=>{
//         console.log("Error")
//         console.log(err.errors.name.properties.message)
//     });

// Product.findOneAndUpdate({name:'Mountain Bike'},{price:-10.99},{new:true ,runValidators:true})
//     .then(data=>{
//         console.log("Updated")
//         console.log(data)
//     })
//     .catch(err=>{
//         console.log("Error")
//         console.log(err)
//     });

const findProduct = async()=>{
    const foundProduct = await Product.findOne({name:'Mountain Bike'});
    foundProduct.hello();
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.category('outdoor');
    console.log(foundProduct);
}
findProduct();