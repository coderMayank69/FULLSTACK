let userInput = prompt("What would you like to do?");
let todo = [];

while (userInput !== "quit") {
    if (userInput === "new") {
        Input = prompt("Enter item to list");
        todo.push(Input);
        console.log(Input + " added to list");
        userInput = prompt("What would you like to do?");
    } else if (userInput === "list") {
        console.log("******************");
             for (let i of todo) {
                    console.log(todo.indexOf(i) + " : " + i);
             }
        console.log("******************");
        userInput = prompt("What would you like to do?");
    } else if (userInput === "delete") {
        Input = parseInt(prompt("Enter index of item to delete"));
        if(!Number.isNaN(Input))
            if(Input < todo.length){
            console.log(todo[Input] + " got deleted");
            todo.splice(Input, 1);
        }else{
            console.log("Invalid input");
        }
        userInput = prompt("What would you like to do?");
    } else {
        userInput = prompt("What would you like to do?");
    }
}
console.log("You quited the app");
