// const dog = {
//     name:'tommy',
//     bark(){
//         console.log(this.name);
//     }
// }
// const dog1 = {
//     const name = 'tommy',
//     bark(){
//         console.log(name);
//     }
// }

const fakeRequest = (url)=> {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },3000)
    })
}

fakeRequest('dog/1')
    .then(()=>{
    console.log('done');
    })