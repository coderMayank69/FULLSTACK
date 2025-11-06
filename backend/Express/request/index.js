const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const {v4:uuid} = require('uuid');  


app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));
app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');

let comments =[
    {
        id:uuid(),
        username:"Todd",
        comment:"lol that is so funny!"
    },
    {
        id:uuid(),
        username:"Skyler",
        comment:"I like to go birdwatching with my dog"
    },
    {
        id:uuid(),
        username:"xyz",
        comment:"plz make my comments more interesting"
    },
    {
        id:uuid(),
        username:"goku",
        comment:"i am the best" 
    }
]
app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments})
})
app.get('/comments/new',(req,res)=>{
    res.render('comments/new');
})
app.get('/comments/:id',(req,res)=>{
    const {id} = req.params;
    const comment = comments.find(c=>c.id===id);
    res.render('comments/show',{comment});

})
//to edit a comment
app.get('/comments/:id/edit',(req,res)=>{
    const {id} = req.params;
    const comment = comments.find(c=>c.id===id);
    res.render('comments/edit',{comment});
});
app.patch('/comments/:id',(req,res)=>{
    const {id} = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c=>c.id===id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
})

//post route to receive data from form
app.post('/comments',(req,res)=>{
    const {username,comment} =req.body;
    comments.push({username,comment,id : uuid()});
    res.redirect('/comments');
})
//delete route to delete a comment
app.delete('/comments/:id',(req,res)=>{
    const {id} = req.params;
    comments = comments.filter(c=>c.id !== id);
    res.redirect('/comments');
})
app.get('/tacos',(req,res)=>{
    res.send("GET/tacos response")
})
app.post('/tacos',(req,res)=>{
    const {name,qty } = req.body;
    res.send(`you ordered ${qty} ${name} tacos`)
})
app.listen(3000,()=>{
    console.log("Port 3000");
})