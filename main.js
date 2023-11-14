// Selecting the required elements from the DOM
const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

// Variation for managing the timer
let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalid;
let hrs = 0;
let mins = 0;
let secs = 0;

// Event listener for the start button
startBtn.addEventListener("click", () => {
	if (paused) {
		paused = false;
		startTime = Date.now() - elapsedTime;
		intervalid = setInterval(updateTime, 1000);
	}
});

// Event listener for the pause button
pauseBtn.addEventListener("click", () =>{
	if (!paused){
		paused = true;
		elapsedTime = Date.now() - startTime;
		clearInterval(intervalid);
	}
});

// Event listener for the reset button
resetBtn.addEventListener("click", () =>{
	// Resetting all the variables and clearing the interval
	paused = true;
	clearInteval(intervalid);
	startTime = 0;
	elapsedTime = 0;
	currentTime = 0;
	hrs = 0;
	mins = 0;
	secs = 0;
	timeDisplay.textContent = "00:00:00";
});

// Function to update the timer display
function updateTime() {
	// Calculating the elapsed time since the start
	elapsedTime = Date.now() - startTime;

	// Calculating hours, minutes and seconds from the elapsed time
	secs = Math.floor((elapsedTime / 1000) % 60);
	mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
	hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

	//Padding single-digit values with leading zeroes
	secs = pad(secs);
	mins = pad(mins);
	hrs = pad(hrs);

	//Updating the timer display with the formatted time
	timeDisplay.textContent = $(hrs);$(mins);$(secs);

	// Function to pad single-digit values with leading zeroes
	function pad(unit) {
		return ("0" + unit).length > 2 ? unit : "0" + unit;
	} 
}
