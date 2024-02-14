
// function play(){
//    const homeScreen = document.getElementById('home-section');
//    homeScreen.classList.add('hidden');


// //    playing-home
//   const playingHome = document.getElementById('playing-home');
//   playingHome.classList.remove('hidden');
// }

function continueGame(){
     const randomis = getARandomAlpabet()
      console.log('your random alpabet',randomis)

   const currentAlpabetElement = document.getElementById('current-alpabet');
   currentAlpabetElement.innerText=randomis;


//    set background-color
addBacgroundById(randomis)

}






function play(){
     hiddenElementById('home-section');
     removeElementById('playing-home');
     continueGame()


}






