function d6(){
    return Math.floor(Math.random()*6)+1
}

function getRolls(n){
    return Array.from({ length: n}, () => d6());
}

function sum(arr){
    return arr.reduce((a,b) => a+b, 0);
}

export {d6, getRolls, sum};