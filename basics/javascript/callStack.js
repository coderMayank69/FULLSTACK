// const multiply = (x,y) => x*y;
// const square = num => multiply(num,num);
// const isRightTriangle = (a,b,c) => square(a) + square(b) === square(c);


// isRightTriangle(3, 4, 5);


// const changeColour = (colour,delay,donext) =>{
//     setTimeout(()=>{
//         document.body.style.backgroundColor = colour;
//          if(donext) donext();
//   },delay);
// };


// changeColour('red',1000,()=>{
//     changeColour('blue',1000,()=>{ 
//         changeColour('green',1000,()=>{
//             changeColour('yellow',1000,()=>{
//                 changeColour('orange',1000,()=>{
//                     changeColour('pink',1000);
//                 })
//             })
//         })
//     })
// })

//Promise


// const changeColour = (colour,delay) => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             document.body.style.backgroundColor = colour;
//             resolve();
//     },delay)
// })
// }

// changeColour('red',1000)
// .then(()=>changeColour('blue',1000))
// .then(()=>changeColour('green',1000))


///aync

// const bla = async () => {
//     return 'abc'
// }

// bla()
//     .then((data) =>{
//         (console.log(data))
//     });


//awaits

// const changeColour = (colour,delay) => {
//      return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//              document.body.style.backgroundColor = colour;
//              resolve();
//      },delay)
//  })
//  }

//  async function rainbow(){
//     await changeColour('red',1000)
//     await changeColour('orange',1000)
//     await changeColour('yellow',1000)
//     await changeColour('green',1000)
//     await changeColour('blue',1000)
//     await changeColour('indigo',1000)
//     await changeColour('violet',1000)
//  }

//  rainbow();

//http request
const req = new XMLHttpRequest();

req.onload = () => {
    const data = JSON.parse(req.responseText);
    console.log(data);
};
req.onerror = () => {
    console.log('this.error');
};

req.open('GET',' https://api.tvmaze.com/schedule?country=US&date=2014-12-01');
req.send();