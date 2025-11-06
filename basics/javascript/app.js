// let random = Math.random();

// if (random > 0.5) {
//     console.log("Random number is greater than 0.5");
//     console.log(random);
// }
// if (random < 0.5) {
//     console.log("Random number is less than 0.5 again");
//     console.log(random);
// }

// let age= Number(prompt("Enter your age: "));

// if (age<5){
//     console.log("You are a baby");
// }else if (age<13){
//     console.log("You are a child");
// }else if (age<20){
//     console.log("You are a teenager");
// }else if (age<65){
//     console.log("You are an adult");  
// }else if(age<100){
//     console.log("You are a senior citizen");
// }else{
//     console.log("Enter a valid age");
// }    


//truthy and falsy

// let userInput = prompt("Enter something");
// if(userInput){
//     console.log("Truthy");
// }else{
//     console.log("Falsy");
// }

// let password = prompt("Enter your password");

// if (password.length >= 6 && password.indexOf(' ') === -1){
//     console.log("Valid password");
// }else{
//     console.log("Invalid password. Password must be at least 6 characters long and cannot contain spaces.");        
// }



//array
// let dogs=['a', 'b', 'c', 'd', 'e'];
// let cats=['f', 'g', 'h', 'i', 'j'];
// dogs.concat(cats);
// console.log(dogs.concat(cats));

// console.log(dogs.slice(2));


// let modified = dogs.splice(2, 3,'x', 'y', 'z');
// console.log(dogs);

// for loop

// for(i=-2;i>10;i++){
//     console.log(i);
// }

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// for (let i = 0; i < matrix.length; i++){

//     for (let j = 0; j < matrix[i].length; j++){
//        console.log(matrix[i][j]);
//         }}

// let secretCode = "1234";
// let guess = prompt("Enter the secret code:");

// while(guess !== secretCode) {
//     console.log("Incorrect code. Try again.");
//     guess = prompt("Enter the secret code:");
// }
// console.log("Correct code! Access granted.");

// let input = prompt("say something");

// while(true) {
//    input = prompt(input);
//    if
//     (input === ("stop")){
//     break;
//    }
// }


// const testscore ={
//   a : 10,
//   b : 20,
//   c : 30,
//   d : 40, 
//   e : 50,
//   f : 60,
//   g : 70,
//   h : 80,
//   i : 90,
//   j : 100,

// };

// for (let key in testscore) {
//   console.log(key + " : " + testscore[key] );}

// let total = 0;  
// let values = Object.values(testscore);

// for(let key of values) {
//   total += key;
//   console.log(total);
// }
// console.log(total/values.length);