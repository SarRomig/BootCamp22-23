const gameContainer = document.getElementById("game");
//need to compare 2 cards' classes (colors)
let cardA;
let cardB;
let cardArr = [];
let timer;
let timeLeft = 60;
let timeDisplay = document.querySelector("#timer");
function gameOver() {
    clearInterval(timer)
    alert("YOU RAN OUT OF TIME! GAME OVER")
}
function gameStart() {
    timer = setInterval(subtractTime, 1000);
    subtractTime();
}

function subtractTime () {
    timeLeft--;
    if (timeLeft >= 0){
        timeDisplay.innerHTML = timeLeft;
    }
    else {
        gameOver();
    }
}
const startBtn = document.querySelector("button");
startBtn.onclick = function (e) {
gameStart();
};

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");
    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
//each "card" already has the click listener attached to it
//need to have cards in "original" state at the start of the game then returnToOriginal if no match
//since the colors are shown when the DOM loads, would it make more sense to add a class of "original" along with that load and add CSS to make those white cards then add "flipped" in the handleCardClick fxn? So, cards start with class of color that is looped over and class of "original" which shows them as white, blank cards. Then, when clicked, card class changes to "flipped" which would show the color of the class it was assigned at the start. Not possible but the thought: element.textDecoration.fontColor? == "class"
//set class of "flipped" to show color, set class of "original" to show blank card (maybe a more fun color than white) that way it can be toggled back and forth

function handleCardClick(event) {
  let currentCard = event.target;
  //need to designate cardA and cardB with color class background
  //this function will run with every click, so it needs to take into account that the card stays in "flipped" until handleCardClick runs again and checks both classes. it runs on the new Div(card) defined in previous function and is called on "click". 
        //add conditional for clicking a different card..
    if (!currentCard.classList.contains("flipped")) {
        currentCard.style.backgroundColor = currentCard.classList[0];
        currentCard.classList.add("flipped");
        if (cardArr.length < 2 ) {
        cardArr.push(currentCard); 
        checkMatch(currentCard);
    }
}
   
    // if(cardArr.length = 2 && cardArr[0] != cardArr[1]) { //only run checkMatch if 2 cards have been clicked
    // checkMatch(currentCard);
    // }
}


// when the DOM loads
createDivsForColors(shuffledColors);
//need to identify cardA and cardB class list from somewhere.. so maybe loop through all the divs on the page and if class of flipped then push to an array, and array.length should only equal 2. Then, you can check the classList of each index in that array and compare them. if arr.length != 2 then keep the loop going. If they match, then keep class as "flipped". If they don't match, then the setTimeout and returnToOriginal fxns occur
function checkMatch (card) {

    for(let i = 0; i < cardArr.length; i++) { //should only let 2 cards be checked at one time. If player selects a third card, do something aggressive
        //compare the color classes of both spots in the arr 
        console.log(cardArr)
        if (cardArr[0].classList[0] === cardArr[1].classList[0]) { //can't read classList when there's only one clicked.
            alert("it's a match!")
        }   
    else {
        console.log("no match!"); //it's entering this else statement, not moving on to setTimeout
        setTimeout(function (e) {
            returnToOriginal(cardArr); //need to reset both cards back to original class of "original"; how to identify cardA and cardB? -- use the whole array since both cards in there will go back to their original state
                }, 1000);
        
    }
}
}

function returnToOriginal(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[0].classList.remove("flipped"); //should be only 2 items in arr (cardArr)
    }
}

//additionals: can only click 2 cards at once, have to be different cards
//need to check when all cards at flipped and then end game
