// Set the target date and time for the countdown (in UTC format)
const targetDate = new Date("2023-11-13T16:00:00Z").getTime();

// Update the countdown every second
const timer = setInterval(function() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown timer
    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // When the countdown reaches zero, display a message
    if (timeRemaining < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Countdown Expired!";
    }
}, 1000);
