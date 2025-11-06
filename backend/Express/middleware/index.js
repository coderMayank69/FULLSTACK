const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError = require('./appError');


app.use(morgan('tiny'));

app.use((req, res, next)=>{ 
    req.requestTime = Date.now();
    console.log(req.method, req.path);
  next();
 })

// silly password authentication

const verifyPasssword =(req, res, next)=>{
    const {password} = req.query;
    if(password === 'password'){
        next();
    }else{
        throw new AppError('Unauthorized',401);
    }
    }
 

app.get('/', (req, res, next) => {
  res.send('Hello World!');
  return next();
});

app.get('/dosomething', (req, res , next) => {
  res.send('Doing something...');
  return next();
});

app.get('/secret',verifyPasssword,(req,res)=>{
    res.send("I am a secret");
})
app.get('/admin', (req,res)=>{
  throw new AppError('You are not admin' , 404)
})
app.use((req, res)=>{
    res.status(404).send(' Not Found');

})

// app.use((err,req,res,next)=>{
//   console.log("***************************");
//   console.log("***********ERROR*********");
//   console.log("***************************");
// })

app.use((err,req,res,next)=>{
 const {status = 500 , message = 'Something went wrong'} = err;
 res.status(status).send(message);
})

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});