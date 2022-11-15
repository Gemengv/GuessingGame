const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const maxSubmit = document.querySelector('.maxSubmit');
const maxField = document.querySelector('.maxField');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const userPrompt = document.querySelector("#userPrompt");
const maxForm = document.querySelector('.form1');
const guessForm = document.querySelector('.form2');
let maxNumber;
let randomNumber;
let guessesArray = [];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  
  
function checkMax(){
    if (maxField.value === ''){
        userPrompt.innerHTML = 'No input value, please enter a number'
        return
      }
    const userMax = Number(Math.round(maxField.value)); //round value
    if (Number.isNaN(userMax)) {
         userPrompt.innerHTML = maxField.value + ' is not a number.'
        return
    } else if (userMax <= 0){
        userPrompt.innerHTML =  maxField.value + ' is zero or less.'
        return
    } else {
        userPrompt.innerHTML = userMax + " is the max number. Please guess number between 1 and " + userMax + '.'
        maxForm.style.display = 'none'
        guessForm.style.display = 'block'
        randomNumber = getRandomIntInclusive(1, userMax) 
        maxNumber = userMax
        return
    }
    
}

maxSubmit.addEventListener('click', checkMax);

function checkGuess() {
    if (guessField.value === ''){
        userPrompt.innerHTML = 'No input value, please enter a number'
        return
      }
  const userGuess = Number(Math.round(guessField.value));

if (Number.isNaN(userGuess)) {
    userPrompt.innerHTML = guessField.value + ' is not a number.'
   return
} else if (userGuess <= 0 || userGuess > maxNumber){
   userPrompt.innerHTML =  `${guessField.value} is zero or less or greater than ${maxNumber}.` //testing something I found out about strings
   return
} else if (guessesArray.includes(userGuess)){
    userPrompt.innerHTML = 'You have already guessed ' + userGuess + '.'
    return
}

guessesArray.push(userGuess); // enters into an array

  if (guessesArray.length === 1) {
    guesses.textContent = 'Previous guesses: ';
  }

  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    let finalString = `You got it! It took you ${guessesArray.length} tries and your guesses were `

    for(let i = 0; i < guessesArray.length; i++){
        if (i === guessesArray.length-1){
            finalString = finalString + guessesArray[i].toString() + '.'   
        } else{
            finalString = finalString + guessesArray[i].toString() + ', '   

        }
    }

    lastResult.textContent = finalString 
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessesArray.length === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!' ;
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  

  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);



