let playgame = confirm("Shall We play Rock/Paper/Scissors");
if(playgame){
    let playerChoice = prompt("Enter rock paper or scissors");
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if(
            playerOne === "rock"||
            playerOne ==="paper"||
            playerOne ==="scissors"
        ){
            let computerChoice = Math.floor(Math.random()* 3 + 1);
            let computer = computerChoice === 1?"rock":computerChoice === 2?"paper": "scissors";
            let result =
            playerOne === computer 
            ? "Tie BRoo!!!"``   
            :playerOne === "rock" && computer === "paper"
            ?`playerOne: ${playerOne} \n computer: ${computer}\nComputer Win broo! bot uh`
            :playerOne === "paper" && computer === "scissors"
            ?`playerOne: ${playerOne} \n computer: ${computer}\nComputer Win broo! bot uh`
            :playerOne === "scissors" && computer === "rock"
            ?`playerOne: ${playerOne} \n computer: ${computer}\nComputer Win broo! bot uh`
            :`playerOne: ${playerOne} \n computer: ${computer}\nPlayer wins`;
            alert(result);
            let playagain = confirm("Play Again");
            playagain ? location.reload(): alert ("Ok! Thank You ");

        }
        else{
            alert("Enter Correctly Bro ");
        }

    }
else{
    alert("I Guess You Changed ur mind");
}
}
else{
    alert("ok bro THANK YOU");
}