// function song(){
//     console.log("Sa");
//     console.log("Re");
//     console.log("Ga");
//     console.log("Ma");
//     console.log("Pa");
//     console.log("Dhi");
//     console.log("Na");
//     console.log("Sa");
// }


// const function abcd(){

// }

const elements = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
//reduce

const total = elements.reduce((num,total) => num + total)


const min = elements.reduce((min, ele) => {
    if(ele<min){
        return ele
    }
    return min
})

const max = elements.reduce((max, ele) => {
    if(ele>max){
        return ele
    }
    return max
})



// for (num of elements){
//     console.log(num);
// }

// elements.forEach(function (ele) {
//     if(ele % 3 === 0){console.log(ele);

//     }
    
// })

const movies = [
    {
        movie : 'xyz',
        score : 45
    },
    {
        movie : 'abc',
        score : 78
    },
    {
        movie : 'mno',
        score : 59
    },
    {
        movie : 'wow',
        score : 99
    },
    {
        movie : 'aww',
        score : 11
    },

]
//filter

// const even = elements.filter(ele => ele % 2 === 0)

// const goodMovies = movies.filter(ele => ele.score >= 50).map(ele => ele.movie)



// forEach  && map with arrow function

// movies.forEach(ele=>{
//     console.log(`${ele.movie} : ${ele.score}%100`)
//  })


//  const Mayan = movies.map(ele => ele.score*2)







// forEach  && map

// movies.forEach(function(ele){
//     console.log(ele);
//     console.log(`${ele.movie} : ${ele.score}%100`);
// })
// let movieScore =  movies.map(function(ele){
//     return ele.score*2;
// })

//arrow function


// let movieScore =  movies.map(ele => ele.score*2)

// const square = num => num**2 ;
// add = (x,y) => x+y;
// const ran = () => Math.floor(Math.random()*10)







// elements.forEach(function(ele)
//     {
//         console.log(ele)

//     }

// )

// let square = elements.map(function(ele){
//     return ele**2;
// })

// setTimeout(() => {
//     console.log("mayank");
// },3000) 
// const i = setInterval(() => {
//     console.log("singh");
// },10000) 

// rest parameter
const sum = (...num) => num.reduce((itn,sum) => itn + sum);
function product(...num){
    return num.reduce((itn,sum) => itn * sum);
}    
