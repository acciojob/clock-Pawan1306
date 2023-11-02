//your JS code here. If required.
function updateTimer() {
    const timerElement = document.getElementById("timer");
    const now = new Date();
    const dateStr = now.toDateString();
    const timeStr = now.toLocaleTimeString();

    timerElement.textContent = `${dateStr} ${timeStr}`;
}

// Update the timer initially
updateTimer();

// Update the timer every second
setInterval(updateTimer, 1000);

