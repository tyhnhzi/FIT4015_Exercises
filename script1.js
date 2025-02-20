function startCountdown() {
    let s = document.getElementById('secondsInput').value;
    let timerDisplay = document.getElementById('timerDisplay');

    function updateTimer() {
        if (s > 0) {
            timerDisplay.innerHTML = `Thời gian còn lại: ${seconds} giây`;
            s--;
            setTimeout(updateTimer, 1000);
        } else {
            timerDisplay.innerHTML = "Time's up!";
        }
    }

    updateTimer();
}