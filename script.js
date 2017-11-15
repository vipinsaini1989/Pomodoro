var Tdate = new Date().getTime();
var active_mode = 'sessionMin'
var sessionTim = document.querySelector('#exceed').innerText;
var breakTim = document.querySelector('#breakExceed').innerText;

// var sessionMin = document.querySelector('#exceed').innerText;
// var breakMin = document.querySelector('#breakExceed').innerText;
var mili = 60000;
var distance;
// var countDownDate = Tdate + sessionMin*mili;



function sessionInc(){
	if (sessionTim<30){
		sessionTim++;
		document.querySelector('#exceed').innerText = sessionTim;
    	document.querySelector('#udateTime').innerText = sessionTim;


	}else {
		document.querySelector('#exceed').innerText = "You cannot increase";
	}

}
function sessionDec(){
	if (sessionTim >1){
		sessionTim--;
		document.querySelector('#exceed').innerText = sessionTim;
    	document.querySelector('#udateTime').innerText = sessionTim;
	}else {
		document.querySelector('#exceed').innerText = "You cannot decrease";
	}
}
function breakInc(){
	if (breakTim<10 ){
		breakTim++;
		document.querySelector('#breakExceed').innerText = breakTim;
    	// document.querySelector('#udateTime').innerText = breakMin;
	}else {
		document.querySelector('#breakExceed').innerText = "You cannot increase";
	}

}
function breakDec(){
	if ( breakTim >1){
		breakTim--;
		document.querySelector('#breakExceed').innerText = breakTim;
    	// document.querySelector('#udateTime').innerText = breakMin;
	}else {
		document.querySelector('#breakExceed').innerText = "You cannot decrease";
	}
}

function sessionTimer(){
	var duration_value = {
	sessionMin : sessionTim,
	breakMin: breakTim
}
	var countDownDate = Tdate + duration_value[active_mode]*mili;
	
// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
 
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // display the timer
    document.querySelector('#udateTime').innerText = minutes + "m " + seconds + "s ";

    if (distance < 1){
		clearInterval(x);
	}
	// 	breakTimer();
	// 	active_mode = 'breakMin'
	// 	document.querySelector('#udateTime').innerText = " ";
	// 	document.querySelector('#callBreak').innerText = "Break !";
	// }else {
	// 	active_mode= 'sessionMin'
	// }

}, 1000);

}

switch_mode = function(){
	
	if (distance < 0){
	active_mode = 'breakMin';
	clearInterval(x);
	document.querySelector('#callBreak').innerText = "Break !";
	document.querySelector('#udateTime').innerText = " ";
}

sessionTimer();
}


// Timer for break !!!
// function breakTimer(){
// 	var countDownDate = Tdate + breakMin*mili;
// 	document.querySelector('#callBreak').innerText = "Break !";
// // Update the count down every 1 second
// var y = setInterval(function() {

//     // Get todays date and time
//     var now = new Date().getTime();
    
//     // Find the distance between now an the count down date
//     var distance = countDownDate - now;
    
//     // Time calculations for minutes and seconds
 
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//     // display the timer
//     document.querySelector('#udateTime').innerText = minutes + "m " + seconds + "s ";

//     if (distance < 0){
// 		clearInterval(y);
// 		// sessionTimer();
// 		document.querySelector('#udateTime').innerText = " ";
// 	}
	
// }, 1000);
	
// }

document.getElementById('clickStart').addEventListener('click', switch_mode);
document.getElementById('breakPlus').addEventListener('click', breakInc);
document.getElementById('breakMinus').addEventListener('click', breakDec);
document.getElementById('sessionPlus').addEventListener('click', sessionInc);
document.getElementById('sessionMinus').addEventListener('click', sessionDec);
