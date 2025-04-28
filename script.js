// Set the end date for the countdown
const endDate = new Date("2025-06-01T00:00:00").getTime(); // You can adjust date!

function updateCountdown() {
  const now = new Date().getTime();
  const distance = endDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

  if (distance < 0) {
    document.querySelector(".countdown").innerHTML = "Promo Ended!";
  }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Run once immediately
updateCountdown();
