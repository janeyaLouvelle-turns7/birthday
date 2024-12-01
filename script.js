const targetDate = new Date("2024-12-15T16:00:00").getTime();
const countdown = document.getElementById('countdown');

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000)) / 1000);

  countdown.innerHTML = `
    <div>${days} <span>Days</span></div>
    <div>${hours} <span>Hours</span></div>
    <div>${minutes} <span>Minutes</span></div>
    <div>${seconds} <span>Seconds</span></div>
  `;

  if (timeLeft < 0) {
    clearInterval(interval);
    countdown.innerHTML = "🎉 The Party has Started! 🎉";
  }
}

const interval = setInterval(updateCountdown, 1000);
