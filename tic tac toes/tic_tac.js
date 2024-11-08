let score_1 =0;
let score_2 =0;
let resest_btn = false;

let boxes = document.querySelectorAll(".box");

const player1 = prompt("Enter Player1 Name:")
const player2 = prompt("Enter Player2 Name:")
document.querySelector('#score1').innerText = ` ${player1}'s  score (X): ${score_1}`;
document.querySelector('#score2').innerText = ` ${player2}'s  score (O): ${score_2}`;
console.log(player1 , player2);


function  randomplayer() {
    let random =2* Math.random();
    if (random <= 1) { 
        random =1 ;
        return turn0 = true;
    }
    
    else if (random <= 2  ){
        random =2 ;
        return turn0 = false;
    }
};

randomplayer();

button =  document.querySelector("#reset_btn");

 
    if(turn0){
    current_turn = "X";} 
    
    else if (!turn0){ 
        current_turn = "O";}

    document.querySelector("#turn").innerText = `player ${current_turn} turns`;
    


button.addEventListener("click", () => {
      resest_btn = true;
      console.log(resest_btn);
      if(resest_btn){
         boxes.forEach( box => {
            box.innerText = "";
            box.style.pointerEvents = "";
            document.querySelector('#turn').innerText = `player ${current_turn} turns`;
            resest_btn = false;
         })
      }

    
});




boxes.forEach( box =>
{  
    box.addEventListener("click", ()=>
     {  
      if(!resest_btn){
         { //   writing inside the box 
       if(turn0){
        box.innerText= "X"
        turn0 = false;    
       }
       else if(!turn0){
         box.innerText ="O"
         turn0  = true; 
       }
       box.style.pointerEvents = "none";
         }      
     {   // whose turn
      if(turn0){   
        document.querySelector('#turn').innerText = `player X  turn`;
      }
      else if (!turn0){
        document.querySelector('#turn').innerText = `player O  turn`;
      }
    }
      winner = getWinner();
      
      if(winner){

      console.log(`Winner is ${winner}`)
      document.querySelectorAll('.box').forEach ( box => box.style.pointerEvents = "none");
      
      if (winner == "X"){
            score_1++;
        document.querySelector('#score1').innerText = ` ${player1}'s score  (X) : ${score_1}`;
        document.querySelector('#turn').innerText = ` ${player1} (${winner})  won this round`;}

      
        
        
 
            else if (winner == "O"){
                score_2++;
                document.querySelector('#score2').innerText = `${player2}  score (O): ${score_2}`; 
                document.querySelector('#turn').innerText = ` ${player2} (${winner})  won this round`; }

            }

       if (score_1 == 3 || score_2 ==3){
        document.querySelector('#turn').innerText = `Game Over`;


       } }

    
    else if(resest_btn){   
        boxes.forEach(box => {
            box.innerText=" "
            
        }) 
        resest_btn = false;

    }

    });
});


function getWinner(){ 
    winPattern = [ 
    [0,1,2] , [3,4,5] , [6,7,8] , 
    [0,3,6] , [1,4,7] , [2,5,8] , 
    [0,4,8] ,[2,4,6]]

    for (let pattern of  winPattern){
         let val1= boxes[pattern[0]].innerText;
         let val2= boxes[pattern[1]].innerText;
         let val3= boxes[pattern[2]].innerText;   

        if(val1==val2 && val2==val3){
            return val1;        
    }
    }
    
}
