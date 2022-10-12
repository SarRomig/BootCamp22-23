//Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.

function countdown (num) { //accepts a number
    let timer = setInterval(function() { //anonymous function to decrement the number
        num--;
        if(num <= 0) { //when num reaches 0, stop the interval from happening again and log done
            clearInterval(timer);
            console.log("DONE!");
        }
        else {
            console.log(num); //otherwise, continue logging the num
        }
    }, 1000) //every 1s (1000ms)
    return num;
}