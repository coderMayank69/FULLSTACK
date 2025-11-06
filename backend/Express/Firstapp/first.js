const express = require('express');
const app = express();

// app.use((req,res) =>{
//     console.log('Request is running...');
//     // res.send('<h1>hiiiii....</h1');
// });   
app.get('/',(req,res) =>{
    res.send();
});
app.get('/r/:subReddit',(req,res) =>{
    const {subReddit} = req.params;
    res.send(`<h1>Welcome to the ${subReddit} subreddit</h1>`);
});
app.get('/dogs',(req,res) =>{
    res.send('<h1> woof </h1>');
});
app.get('/cats',(req,res) =>{
    res.send('meow..........');
});
app.post('/cat',(req,res) =>{  
    res.send('POST request to /cats');
});
app.post(/(.*)/,(req,res) =>{
    res.send('I dont know that path');
});


//search query
app.get('/search',(req,res)=>{
    const {q} = req.query;
    if(!q){
        res.send('Nothing found if nothing searched');
    }
    res.send(`<h1>Sea results for ${q}</h1>`);
})



app.listen(3000,() => {
    console.log('Server is running...');
})
