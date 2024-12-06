const countdownDuration =
    (5 * 24 * 60 * 60 + 23 * 60 * 60 + 59 * 60 + 35) * 1000; // Total in milliseconds
const countdownTarget = new Date().getTime() + countdownDuration; // Target time

// Function to format numbers with leading zeros
function formatNumber(number) {
    return number < 10 ? '0' + number : number;
}

// Update the countdown every second
const countdownInterval = setInterval(() => {
    const now = new Date().getTime(); // Get the current time
    const timeLeft = countdownTarget - now; // Calculate the time left

    // If the countdown is over
    if (timeLeft <= 0) {
        clearInterval(countdownInterval); // Stop the countdown
        document.getElementById("clock").innerHTML = "<p>Countdown Complete!</p>";
        return;
    }

    // Calculate remaining days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the HTML with the calculated values
    document.getElementById("day").innerText = formatNumber(days);
    document.getElementById("hour").innerText = formatNumber(hours);
    document.getElementById("minute").innerText = formatNumber(minutes);
    document.getElementById("second").innerText = formatNumber(seconds);
}, 1000); 