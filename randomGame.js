//Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.



//need a function with math.random(0, 1)  
//need a timer for every 1000ms
function randomGame() {
    let randomNum = Math.random();
    let counter = 0;
    let gamePlay = setInterval(function () { //was going to create the function outside and call it in here but this seemed easier (and just did it)
        counter++; //add 1 to a counter each time you get a random number
        if (randomNum > .75) {
                clearInterval(gamePlay);
                console.log(`You took ${counter} tries to find a number greater than .75`); 
            }
    }, 1000);
    return gamePlay;
}
