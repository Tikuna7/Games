var btnNew = document.querySelector(".btn-new");
var btnRoll = document.querySelector('.btn-roll');
var btnHold = document.querySelector('.btn-hold');
var finalScore = document.querySelector('.final-score');
var dice = document.querySelector(".dice");

var score = [0,0], currentScore = 0, activePlayer = 0, gameStatus = true, activePlayerPanel = document.querySelector('.player-0-pannel');

var next = function(){

    currentScore = 0;
        activePlayerPanel.querySelector('.player-current-score').textContent = 0 ;
        activePlayerPanel.classList.remove("active");
        activePlayer = activePlayer === 1 ? 0: 1; 
        activePlayerPanel = document.querySelector('.player-' + activePlayer + '-pannel')
        activePlayerPanel.classList.add("active");
        dice.style.display="none";

}


btnRoll.addEventListener('click',function(){
   if(finalScore.value){
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    dice.src = "img/dice-" + randomNumber +".png";
    dice.style.display ="block";

    if(randomNumber !== 1){
        currentScore +=randomNumber;
        activePlayerPanel.querySelector('.player-current-score').textContent = currentScore;
    }else{
        next();

   }

   }else{

    finalScore.focus();
    finalScore.placeholder = "please insert winner score "
   }

});


btnHold.addEventListener("click", function(){
    if (gameStatus){
   var endGameScore = finalScore.value ;


    score[activePlayer] += currentScore;
    activePlayerPanel.querySelector(".player-score").textContent = score[activePlayer];
    
    if(score[activePlayer] >= +endGameScore){
        //winner
        activePlayerPanel.classList.remove("active");
        activePlayerPanel.classList.add("winner");
        activePlayerPanel.querySelector(".player-name").textContent = "winner !"
        dice.style.display = "none";
        finalScore.placeholder = "winner-score";
        finalScore.value = '';
        gameStatus = false ;

    }else{
         next();
    }

   
}
});

btnNew.addEventListener('click', function(){
   
    /*window.location.reload(); */    /* es isaa amdeni weris gareshe ro vizamdit*/

    console.log("Btn-New")
    score =[0,0]
    currentScore = 0;
    activePlayer = 0
    gameStatus = true;

  activePlayerPanel = document.querySelector(".player-0-pannel");

  dice.style.display ="none";
  document.querySelector(".player-0-pannel .player-score").textContent = '0';
  document.querySelector(".player-0-pannel .player-current-score").textContent = '0';
  document.querySelector(".player-1-pannel .player-score").textContent = '0';
  document.querySelector(".player-1-pannel .player-current-score").textContent = '0';
  document.querySelector(".player-0-pannel .player-name").textContent = 'მოთამაშე 1';
  document.querySelector(".player-1-pannel .player-name").textContent = 'მოთამაშე 2';
  document.querySelector(".player-0-pannel ").classList.remove("winner");
  document.querySelector(".player-1-pannel ").classList.remove("winner");
  document.querySelector(".player-0-pannel ").classList.remove("active");
  document.querySelector(".player-1-pannel ").classList.remove("active");
  document.querySelector(".player-0-pannel ").classList.add("active");
  
  finalScore.placeholder ="winner score";
  finalScore.value ='';
  

});

