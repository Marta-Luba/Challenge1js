'use strict';

//Challenge 1 Your age in days

// (I have made this course for begginners, it is obvious that this way of calculation is very primitive and is not accurate)

function ageinDays() {
  let birthYear = prompt('What year were you born?');
  let ageInDays = (2023 - birthYear) * 365;
  let h1 = document.createElement('h1');
  let textAnswer = document.createTextNode(
    'You are ' + ageInDays + ' days old.'
  );
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
  document.getElementById('ageInDays').remove();
}

//Challenge 2: Cat gif generator
function generateCat() {
  let image = document.createElement('img');
  let div = document.getElementById('flex-cat-gen');
  image.src = 'http://thecatapi.com/api/images/get?format=src&type=gif';
  div.appendChild(image);
}

//Challenge 3: Rock, Paper & Scissors

function rpsGame(yourChoice) {
  console.log(yourChoice.id);
  let manChoice;
  let botChoice;
  manChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  console.log('Computer choice:', botChoice);

  let results = decideWinner(manChoice, botChoice); // [0,1] man lost, bot won
  console.log(results);

  let message = finalMessage(results);
  console.log(message);
  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
  let rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };

  let yourScore = rpsDatabase[yourChoice][computerChoice];
  let computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: 'You lost!', color: 'red' };
  } else if (yourScore === 0.5) {
    return { message: 'You tied!', color: 'yellow' };
  } else {
    return { message: 'You won!', color: 'green' };
  }
}

function rpsFrontEnd(manImageChoice, botImageChoice, finalMessage) {
  let imagesDatabase = {
    rock: document.getElementById('rock').src,
    paper: document.getElementById('paper').src,
    scissors: document.getElementById('scissors').src,
  };
  //let's remove all the images
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  let manDiv = document.createElement('div');
  let botDiv = document.createElement('div');
  let messageDiv = document.createElement('div');

  manDiv.innerHTML =
    "<img src='" +
    imagesDatabase[manImageChoice] +
    "' height=150 width=150 style='box-shadow: 0px 10px 15px rgba(18, 190, 238, 1) '>";

  messageDiv.innerHTML =
    "<h1 style='color: " +
    finalMessage['color'] +
    "' font-size: 60px; padding: 30px; '>" +
    finalMessage['message'] +
    '</h1>';

  botDiv.innerHTML =
    "<img src='" +
    imagesDatabase[botImageChoice] +
    "' height=150 width=150 style='box-shadow: 0px 10px 15px rgba(234, 38, 24, 1) '>";

  document.getElementById('flex-box-rps-div').appendChild(manDiv);
  document.getElementById('flex-box-rps-div').appendChild(botDiv);
  document.getElementById('flex-box-rps-div').appendChild(messageDiv);
}

//Challlenge 4: Change color of all buttons
let all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

let copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);
function buttonColorChange(buttonThingy) {
  if (buttonThingy.value === 'red') {
    buttonsRed();
  } else if (buttonThingy.value === 'green') {
    buttonsGreen();
  } else if (buttonThingy.value === 'reset') {
    buttonColorReset();
  } else if (buttonThingy.value === 'random') {
    randomColors();
  }
}
function buttonsRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
  }
}
function buttonsGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
}
function buttonColorReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

function randomColors() {
  let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];
  for (let i = 0; i < all_buttons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
  }
}
