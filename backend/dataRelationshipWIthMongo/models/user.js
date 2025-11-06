const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/relationshipDEMO',{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log("Mongo Connection Open")
    })
    .catch(err=>{
        console.log("Mongo Connection Error")
        console.log(err)
    })

const userSchema = new mongoose.Schema({
    first:String,
    last:String,
    addresses:[
        {
            
            _id: {_id: false}, // Disable _id for subdocuments
            street:String,
            city:String,
            state:String,
            country:{
                type:String,
                required:true
            }
        }
    ]
})
    
const User = mongoose.model('User',userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter', 
        addresses:[{
            street:'4 Privet Drive',
            city:'Little Whinging',
            state:'Surrey',
            country:'UK',
        }]
    })
    const result = await u.save();
    console.log(result)
}

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push({
         street:'Privet Drive',
            city:'Little Whinging',
            state:'NY',
            country:'USA',
    })
    const result = await user.save();
    console.log(result)

}
addAddress('68c2a9890b4d0f3348576f7b'); 
//makeUser();