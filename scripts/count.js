

    // Function to format numbers with leading zeros
    function formatNumber(number) {
        return number < 10 ? '0' + number : number;
    }

    // Countdown 1
    const countdownDate1 = new Date().getTime() + 4 * 24 * 60 * 60 * 1000; // 4 days from now
    const countdownInterval1 = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = countdownDate1 - now;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval1);
            document.getElementById("countdown").innerHTML = "<p>Countdown Complete!</p>";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = formatNumber(days);
        document.getElementById("hours").innerText = formatNumber(hours);
        document.getElementById("minutes").innerText = formatNumber(minutes);
        document.getElementById("seconds").innerText = formatNumber(seconds);
    }, 1000);

    // Countdown 2
    const countdownDuration2 =
        (5 * 24 * 60 * 60 + 23 * 60 * 60 + 59 * 60 + 35) * 1000; // Custom duration
    const countdownDate2 = new Date().getTime() + countdownDuration2;
    const countdownInterval2 = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = countdownDate2 - now;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval2);
            document.getElementById("clock").innerHTML = "<p>Countdown Complete!</p>";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("day").innerText = formatNumber(days);
        document.getElementById("hour").innerText = formatNumber(hours);
        document.getElementById("minute").innerText = formatNumber(minutes);
        document.getElementById("second").innerText = formatNumber(seconds);
    }, 1000);

