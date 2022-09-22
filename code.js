
function game(){
    let user = 0;
    let comp =0;
    for (let i = 1; i <= 5; i++){
        let CompChoice = getComputerChoice();
        let UserChoice = prompt("Your choice of weapon").toLowerCase() ;
        if (UserChoice != "rock" && UserChoice != "paper" && UserChoice != "scissor"){
            UserChoice = prompt("please choose an appropriate weapon");
        }
        console.log(`ROUND ${i} \n`);
        console.log(`YOUR CHOICE: ${UserChoice}`);
        console.log(`COMPUTER'S CHOICE: ${CompChoice}`);
        let result = round(UserChoice, CompChoice)
        if (result == "user"){
            user++;
        }
        if (result == "comp"){
            comp++;
        }  
        console.log("\n ---------------------------------------------------------\n");      
    }
    console.log("YOUR TOTAL POINTS: " + user);
    console.log("COMPUTER'S TOTAL POINTS: " + comp);    
    if (user > comp){
        console.log("CONGRATS! YOU WIN.");
    }
    else if (user == comp){
        console.log("IT IS A DRAW");
    }
    else{
        console.log("THE COMPUTER WINS. BETTER LUCK NEXT TIME");
    }
}




function getComputerChoice(){
    let CompNum = Math.floor(Math.random() * (4) + 1);
    
    if (CompNum == 1){
         return "rock";
    }
    else if( CompNum == 2){
        return "paper";
    }
    else{
        return "scissor";
    }
    
}



function round(UserChoice, CompChoice){
    
    if (UserChoice == CompChoice){
        console.log("It is a tie both have chosen the same weapon");
    }
    else if (UserChoice == "rock" && CompChoice == "paper"){
        console.log("One point for YOU");
        return "user";
    }
    else if (UserChoice == "paper" && CompChoice == "scissor"){
        console.log("One point for the COMPUTER ");
        return "comp";
    }
    else if (UserChoice == "scissor" && CompChoice == "rock"){
        console.log("One point for the COMPUTER");
        return "comp";
    }
    else if (UserChoice == "rock" && CompChoice == "scissor"){
        console.log("One point for YOU");
        return "user";
    }
    else if (UserChoice == "paper" && CompChoice == "rock"){
        console.log("One point for the COMPUTER");
        return "comp";
    }
    else if (UserChoice == "scissor" && CompChoice == "paper"){
        console.log("One point for YOU");
        return "user";
    }
}



game();
