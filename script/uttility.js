
function hiddenElementById(elementId){
   const element = document.getElementById(elementId);
   element.classList.add('hidden');
}

function removeElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden');
}



// add background-color
function removeBackgroundById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-600')
}
function addeBacgroundById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-600')
}

// current Alpabet
function getElementTextById(elementId){
  const element = document.getElementById(elementId);
  const text= element.innerText;
  return text;
}

// set value
function getTextElementVlaueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

// set score
function  setScoreElementValueById(elementId,value){
    const element= document.getElementById(elementId);
    element.innerText=value;
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








