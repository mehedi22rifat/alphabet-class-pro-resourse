
function hiddenElementById(elementId){
   const element = document.getElementById(elementId);
   element.classList.add('hidden');
}

function removeElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden');
}


// add background-color
function addBacgroundById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-600')
}


// // alpabet
// function getARandomAlpabet(){
//    const alpabetsString = 'abcdefghijklmnopqrstuvwxyz';
//    const alpabets = alpabetsString.split('');
// //    console.log(alpabets);


// // random nmbwer zenerate
//   const randomNumber = Math.random()*25;
//   const index= Math.round(randomNumber);
// //   console.log(index);

// //   alpabets
// const alpabet = alpabets[index];
// // console.log(index,alpabet)
// return alpabet;

// }

function getARandomAlpabet(){
    const alpabetsString = 'abcdefghijklmnopqurstuwxyz';
    const alpabet = alpabetsString.split('')
     
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);


     const alpabets = alpabet[index]
     return alpabets;





}








