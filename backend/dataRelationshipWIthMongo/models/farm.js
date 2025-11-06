const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDEMO',{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log("Mongo Connection Open")
    })
    .catch(err=>{
        console.log("Mongo Connection Error")
        console.log(err)
    })


const productSchema = new Schema({
    name:String,
    price:Number,
    season:{
        type:String,
        enum:['Spring','Summer','Fall','Winter']
    },

    })
    
const  farmSchema = new Schema({
    name:String,
    city:String,
    products:[{
        type:Schema.Types.ObjectId,
        ref:'Product'
    }]
})

const Farm = mongoose.model('Farm',farmSchema); 
const Product = mongoose.model('Product',productSchema);

// Product.insertMany([
//     { name: 'Goddess Melon', price: 4.99, season: 'Summer' },
//     { name: 'Organic Goddess Melon', price: 4.99, season: 'Summer' },
//     { name: 'Organic Mini Seedless Watermelon', price: 3.99, season: 'Summer' }
// ])

// const makeFarm = async () => {
//     const farm = new Farm({name:'FullStack Farm', city:'New York'});
//     const melon = await Product.findOne({name:'Goddess Melon'});
//     farm.products.push(melon);
//     await farm.save();
//     console.log(farm)
// }
// makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({name:'FullStack Farm'});
    const watermelon = await Product.findOne({name:'Organic Mini Seedless Watermelon'});
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm)
}
// addProduct();
Farm.findOne({name:'FullStack Farm'}).populate('products').then(farm => {console.log(farm)})