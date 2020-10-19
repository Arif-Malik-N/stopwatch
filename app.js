
var hours = 0;
var min = 0;
var sec = 0;

var hourHeading = document.getElementById('hour')
var minHeading = document.getElementById('min')
var secHeading = document.getElementById('sec')



var interVal;



function timer() {

    sec++
    if(sec < 9){
        secHeading.innerHTML = "0"+sec;  
    }
    else
    secHeading.innerHTML = sec;
    if (sec > 30) {
        min++
    if(min < 9){
        minHeading.innerHTML = "0"+min;
    }
       else 
       minHeading.innerHTML = min;
        sec = 0;

    }
    else if (min >= 6) {
        hours++
        if(hours < 9){
            hourHeading.innerHTML = "0"+hours;
        }
else
hourHeading.innerHTML = hours;
        min = 0;
    }
}

function stratTimer() {
    
    interVal = setInterval(timer, 100)
}

function stopTimer() {
    clearInterval(interVal)

}

function restTimer() {
    hours = 0;
    min = 0;
    sec = 0;
    hourHeading.innerHTML = hours;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    stopTimer();
}
