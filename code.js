
let rock = 1;
let paper = 2;
let scissor = 3;

let UserChoice = prompt("Your choice of weapon").toLowerCase() ;


if (UserChoice != "rock" && UserChoice != "paper" && UserChoice != "scissor"){
    console.log("please choose an appropriate weapon ");
      
}

function getComputerChoice(){
    let CompNum = Math.floor(Math.random() * (4) + 1);
    
    if (CompNum == 1){
        let CompChoice = "rock";
        return CompChoice;
    }
    else if( CompNum == 2){
        let CompChoice = "paper";
        return CompChoice;
    }
    else{
        let CompChoice = "scissor";
        return CompChoice;
    }
    
}

let CompChoice = getComputerChoice();

function round(UserChoice, CompChoice){
    if (UserChoice == CompChoice){
        console.log("It is a tie both have chosen the same weapon");
    }
    else if (UserChoice == "rock" && CompChoice == "paper"){
        console.log("One point for YOU");
    }
    else if (UserChoice == "paper" && CompChoice == "scissor"){
        console.log("One point for the COMPUTER ");
    }
    else if (UserChoice == "scissor" && CompChoice == "rock"){
        console.log("One point for the COMPUTER");
    }
    else if (UserChoice == "rock" && CompChoice == "scissor"){
        console.log("One point for YOU");
    }
    else if (UserChoice == "paper" && CompChoice == "rock"){
        console.log("One point for the COMPUTER");
    }
    else if (UserChoice == "scissor" && CompChoice == "paper"){
        console.log("One point for YOU");
    }
}

round(UserChoice, CompChoice);