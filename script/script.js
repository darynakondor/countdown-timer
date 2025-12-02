const nextYear = new Date().getFullYear() + 1;
const futureDate = new Date(nextYear, 0, 1, 0, 0, 0);
document.getElementById("year").textContent = nextYear;

function pluralizeDays(n) {
  if (n === 1 || (n % 10 === 1 && n !== 11)) return "день";
  if (
    n === 2 ||
    n === 3 ||
    n === 4 ||
    (n % 10 === 2 && n !== 12) ||
    (n % 10 === 3 && n !== 13) ||
    (n % 10 === 4 && n !== 14)
  )
    return "дні";
  return "днів";
}

function scoreOfTime() {
  const now = new Date();
  const diff = futureDate - now;

  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  document.getElementById("days").innerHTML = `<time>${days}</time> ${pluralizeDays(days)}`;
  document.getElementById("hours").innerHTML = `<time>${hours}</time> год`;
  document.getElementById("minutes").innerHTML = `<time>${minutes}</time> хв`;
  document.getElementById("seconds").innerHTML = `<time>${seconds}</time> сек`;
}

scoreOfTime();
setInterval(scoreOfTime, 1000);
