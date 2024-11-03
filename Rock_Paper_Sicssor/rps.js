
let userChoice=" " 
  , compChoice =" "
  , winner =" ";
  let userScore = 0;
  let compScore = 0;

  const options = [ "rock" , "paper" , "scissor"];


const choice_ = document.querySelectorAll(".choice");
choice_.forEach( (choice) => {
    choice.addEventListener("click" ,() => {
        const userChoice = choice.getAttribute("id") ;  
     // Random number generation and round off .

       let rand = 3* Math.random();
       if  ( rand <= 1){ rand  = 0 } 
       else if  (rand <= 2){ rand = 1}
       else if  (rand <= 3){ rand = 2}
       
       console.log("randon Number was : " ,rand )
       compChoice = options[rand]; 
       winner = getWinner(userChoice , compChoice);
       console.log(winner);
       console.log("\n  \n");
       let message= document.querySelector("h2");

        if (winner === "user" ){
            message.innerText = " You won  this round"; 
            userScore++;
            document.querySelector("#user_score").innerText = userScore;
       }
       else if (winner == "Tie"){ message.innerText = "IT'S A TIE" ; }
       
       else if (winner == "comp" ){   
        message.innerText = "Computer  won this round";
        compScore++;
        document.querySelector("#computer_score").innerText = compScore;

        }
        else{
            message.innerText = "Error !";
        }

       })    
    
})



function getWinner (userChoice , compChoice) {
    console.log ("User : " , userChoice , " || " ,"comp :", compChoice);
   
     // logic  comparison
    
    if (userChoice == compChoice){ return ("Tie")}
    else if ( userChoice == "paper"){
        if (compChoice == "rock") {return "user" ;}
        else if (compChoice == "scissor"){ return "comp" ;}


    }
    else if (userChoice == "rock"){
        if (compChoice == "scissor") {return "user" ; }
        else if (compChoice == "paper"){ return "comp"; }

    }


    else if (userChoice == "scissor"){
        if (compChoice == "paper") {return "user" ;}
        else if (compChoice == "rock"){ return "comp";}
    
    else { return 0 ;}

}

}



getWinner(userChoice , compChoice);


