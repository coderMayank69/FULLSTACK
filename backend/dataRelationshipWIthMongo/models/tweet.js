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


const userSchema = new Schema({
    username:String,
    age:Number,
})
const tweetSchema = new Schema({
    text:String,
    likes:Number,
    user:{type:Schema.Types.ObjectId,ref:'User'}
})

const User = mongoose.model('User',userSchema);
const Tweet = mongoose.model('Tweet',tweetSchema);

// const makeTweets = async () => {
// //  const user = new User({username:'joneySins69', ageL:34});
//     const user = await User.findOne({username:'joneySins69'})
//     const tweet2 = new Tweet({text:'I love cat dogs and bitches', like:20});
//     tweet2.user = user;
//     await tweet2.save();
// };
// makeTweets();

const findTweet = async () => {
    const t = await Tweet.find({}).populate('user');
    console.log(t);
}
findTweet();
