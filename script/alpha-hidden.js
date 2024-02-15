
// function play(){
//    const homeScreen = document.getElementById('home-section');
//    homeScreen.classList.add('hidden');


// //    playing-home
//   const playingHome = document.getElementById('playing-home');
//   playingHome.classList.remove('hidden');
// }


// onclick play
function play(){
     hiddenElementById('home-section');
     hiddenElementById('score-sectoin');
     removeElementById('playing-home');
// 
      setScoreElementValueById('current-life',5);
      setScoreElementValueById('current-score',0);

     continueGame()


}

// kye up 
function handlerKybordButton(event){
     const playerPrssed=event.key


     // skep stop game
       if(playerPrssed === 'Escape'){
          gameOver()
       }


     // console.log('player pressed',playerPrssed);

    const currentAlpabetElement = document.getElementById('current-alpabet');
    const currentAlpabet = currentAlpabetElement.innerText;
    const currentAlpabetLowerCase= currentAlpabet.toLocaleLowerCase();
//     console.log(playerPrssed,currentAlpabetLowerCase)

    if(playerPrssed===currentAlpabetLowerCase){

     const currentScore =  getTextElementVlaueById('current-score');
     const updatedScore = currentScore + 1;
     setScoreElementValueById('current-score',updatedScore);
     // --------------------------------------------------------------
     // console.log('you are win');
     //  const currentScoreElement = document.getElementById('current-score');
     //  const currentScoerText =currentScoreElement.innerText;
     //  const currentScore = parseInt(currentScoerText);
     // //  console.log(currentScore) 
             

     // //  incress the score by 1
     // const newScore = currentScore+1;
     // // score update
     // currentScoreElement.innerText = newScore;
         




     // start a new round
     removeBackgroundById(currentAlpabetLowerCase)
     continueGame()
    }else{
         const curretnLife = getTextElementVlaueById('current-life');
         const updateLife = curretnLife -1;

         setScoreElementValueById('current-life',updateLife);

     // --------------------------------------
     // console.log('you are no wil');
     // incress the life by 1
     //     const currentLifeElement =document.getElementById('current-life');
     //     const currentLifeText = currentLifeElement.innerText;
     //     const currentLife = parseInt(currentLifeText)
     // // life update
     //       const newLife = currentLife-1;
     // // set life score
     //  currentLifeElement.innerText = newLife;



      if(updateLife === 0){
          gameOver()
      }
    
     }

}
document.addEventListener('keyup',handlerKybordButton);
  
function gameOver(){
     hiddenElementById('playing-home');
     removeElementById('score-sectoin');
     // game last score
     const lastScore = getTextElementVlaueById('current-score');
     // console.log(lastScore)
     setScoreElementValueById('last-score',lastScore);
}


//  current appabet 
const currentAlpabetis = getElementTextById('current-alpabet');
//   console.log(currentAlpabetis)
  removeBackgroundById(currentAlpabetis);



function continueGame(){
     const randomis = getARandomAlpabet()
     //  console.log('your random alpabet',randomis)

   const currentAlpabetElement = document.getElementById('current-alpabet');
   currentAlpabetElement.innerText=randomis;
   

// set background-color
 removeBackgroundById(randomis);
 addeBacgroundById(randomis);



}











