// getting the system date to add in our time required
var Tdate = new Date().getTime();
// place value of session timer
var sessionTim = document.querySelector('#exceed').innerText;
// place value of break timer.
var breakTim = document.querySelector('#breakExceed').innerText;

// to increase the session time
function sessionInc(){
	if (sessionTim<30){
		sessionTim++;
		document.querySelector('#exceed').innerText = sessionTim;
    	document.querySelector('#udateTime').innerText = sessionTim;


	}else {
		document.querySelector('#exceed').innerText = "You cannot increase";
	}

}
// to decrease the session time
function sessionDec(){
	if (sessionTim >1){
		sessionTim--;
		document.querySelector('#exceed').innerText = sessionTim;
    	document.querySelector('#udateTime').innerText = sessionTim;
	}else {
		document.querySelector('#exceed').innerText = "You cannot decrease";
	}
}
// to increase the break time duration
function breakInc(){
	if (breakTim<10 ){
		breakTim++;
		document.querySelector('#breakExceed').innerText = breakTim;
	}else {
		document.querySelector('#breakExceed').innerText = "You cannot increase";
	}

}
// button to decrease the break time duration
function breakDec(){
	if ( breakTim >1){
		breakTim--;
		document.querySelector('#breakExceed').innerText = breakTim;
	}else {
		document.querySelector('#breakExceed').innerText = "You cannot decrease";
	}
}

var switch_mode = function(length, type){
// Set the date we're counting down to
var countDownDate = new Date().getTime() + length*60000;
// while timer is ON button is disabled
document.getElementById('breakPlus').disabled = true;
document.getElementById('breakMinus').disabled = true;
document.getElementById('sessionPlus').disabled=true;
document.getElementById('sessionMinus').disabled = true;

// Update the count down every 1 second
var x = setInterval(function() {
	document.querySelector('#stopBtn').style.display = "block";
    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element 
    document.getElementById("udateTime").innerHTML = `${minutes}m${seconds}s`;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        if (type == "session"){
        	switch_mode(breakTim,"Break");
        	document.getElementById("callBreak").innerHTML = "BREAK!!";
        } else{
        	switch_mode(sessionTim,"session");
        	document.getElementById("callBreak").innerHTML = "Session";
        }
    }
}, 1000);
};

// Reset button 
var resetBtn = document.querySelector('#stopBtn');
resetBtn.addEventListener("click",()=>
	location.reload()
);
// click events for all buttons
document.getElementById('clickStart').addEventListener('click', ()=> switch_mode(sessionTim, "session"));
document.getElementById('breakPlus').addEventListener('click', breakInc);
document.getElementById('breakMinus').addEventListener('click', breakDec);
document.getElementById('sessionPlus').addEventListener('click', sessionInc);
document.getElementById('sessionMinus').addEventListener('click', sessionDec);