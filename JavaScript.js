function getComputerChoice(){
    let CompNum = Math.floor(Math.random() * (4) + 1);
    
    if (CompNum == 2){
         return "rock";
    }
    else if( CompNum == 1){
        return "paper";
    }
    else if (CompNum == 3){
        return "scissor";
    }
    
}

function getWinner(UserChoice, CompChoice){
    if (UserChoice == CompChoice){
        console.log("It is a tie both have chosen the same weapon");
    }
    else if (UserChoice == "rock" && CompChoice == "paper"){
        console.log("One point for the COMPUTER");
        return "comp";
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
        console.log("One point for YOU");
        return "user";
    }
    else if (UserChoice == "scissor" && CompChoice == "paper"){
        console.log("One point for YOU");
        return "user";
    }
}

let initialScoreYou = 0;
let initialScoreComp = 0;


let buttons = document.querySelectorAll('.btn');
console.log(buttons)
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let UserChoice =e.srcElement.classList[1];
        let CompChoice = getComputerChoice();
        console.log(CompChoice)
        let winner = getWinner(UserChoice, CompChoice);
        console.log(winner);
        if (initialScoreYou >= 5){
            return;
        }
        if (initialScoreComp >= 5){
            return;
        }
        if (winner == "user"){
            initialScoreYou++;
            let score = document.querySelector('.results .you .ypoint')
            score.textContent = initialScoreYou;
            let info = document.querySelector('.info');
            info.textContent = "YOU WON THIS ROUND!";
        }
        else if (winner == "comp"){
            initialScoreComp++;
            let score = document.querySelector('.results .computer .cpoint')
            score.textContent = initialScoreComp;
            let info = document.querySelector('.info');
            info.textContent = "THE COMPUTER WINS THIS ROUND";
        }
        else{
            let info = document.querySelector('.info');
            info.textContent = "IT IS A TIE";
        }
        if (initialScoreYou == 5){
            let info = document.querySelector('.info');
            info.textContent = "CONGRATS! YOU HAVE WON";
            let button1 = document.querySelector('.buttons .rock');
            let button2 = document.querySelector('.buttons .paper');
            let button3 = document.querySelector('.buttons .scissor');
            let scores = document.querySelector('.bottom .results');
            info.setAttribute('style', 'font-size: 64px');
            button1.remove();
            button2.remove();
            button3.remove();

            let head = document.querySelector('.heading');
            head.innerHTML ='<div class = "head">ROCK PAPER SCISSORS</div><img src="./photos/win.jpg" class = "img">' ;
            info.setAttribute('style', 'font-size: 64px; margin-top: -8px;');
            scores.setAttribute('style', 'margin-top: -100px')
        }
        if (initialScoreComp == 5){
            let info = document.querySelector('.info');
            info.textContent = "THE COMPUTER HAS WON";
            let button1 = document.querySelector('.buttons .rock');
            let button2 = document.querySelector('.buttons .paper');
            let button3 = document.querySelector('.buttons .scissor');
            let scores = document.querySelector('.bottom .results');            
            button1.remove();
            button2.remove();
            button3.remove();
            
            let head = document.querySelector('.heading');
            head.innerHTML ='<div class = "head">ROCK PAPER SCISSORS</div><img src="./photos/lose.jpg" class = "img">' ;
            info.setAttribute('style', 'font-size: 64px; margin-top: -8px;');
            scores.setAttribute('style', 'margin-top: -100px')
        }
    })
})

let playAgain = document.querySelector('.retry')
playAgain.addEventListener('click', () => {
    window.location.reload();
})
