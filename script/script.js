function windowLoad() {
    function forestAnimation() {
        const trees = document.querySelectorAll('.main__trees');
        mountains = document.querySelector('.main__mountains');

        mountains.classList.add('block');
        trees.forEach((tree) => {
            tree.classList.add('block');
        })
    }
    forestAnimation()
}

window.addEventListener('load', windowLoad);

const futureDate = new Date('Jan 1 2023 00:00:00')

function scoreOfTime() {
    const currentDate = new Date()
    difference = futureDate - currentDate;
    days = Math.floor(difference / 60000 / 60 / 24);
    hours = Math.floor(difference / 60000 / 60) % 24;
    minutes = Math.floor(difference / 60000) % 60;
    seconds = Math.floor(difference / 1000) % 60;

    days === 1 || days % 10 === 1 && days !== 11 ? document.getElementById('days').innerHTML = `<time>${days}</time> день` :
        (days === 2) || (days == 3) || (days === 4) || (days % 10 === 2 && !days !== 12) || (days % 10 === 3 && days !== 13) || (days % 10 === 4 && days !== 14) ? document.getElementById('days').innerHTML = `<time>${days}</time> дні` :
            document.getElementById('days').innerHTML = `<time>${days}</time> днIв`

    hours === 1 || hours % 10 === 1 && hours !== 11 ? document.getElementById('hours').innerHTML = `<time>${hours}</time> година` :
        (hours === 2) || (hours === 3) || (hours === 4) || (hours % 10 === 2 && hours !== 12) || (hours % 10 === 3 && hours !== 13) || (hours % 10 === 4 && hours !== 14) ? document.getElementById('hours').innerHTML = `<time>${hours}</time> години` :
            document.getElementById('hours').innerHTML = `<time>${hours}</time> годин`

    minutes === 1 || minutes % 10 === 1 && minutes !== 11 ? document.getElementById('minutes').innerHTML = `<time>${minutes}</time> хвилина` :
        (minutes === 2) || (minutes === 3) || (minutes === 4) || (minutes % 10 === 2 && minutes !== 12) || (minutes % 10 === 3 && minutes !== 13) || (minutes % 10 === 4 && minutes !== 14) ? document.getElementById('minutes').innerHTML = `<time>${minutes}</time> хвилини` :
            document.getElementById('minutes').innerHTML = `<time>${minutes}</time> хвилин`

    seconds === 1 || seconds % 10 === 1 && seconds !== 11 ? document.getElementById('seconds').innerHTML = `<time>${seconds}</time> секунда` :
        (seconds === 2) || (seconds === 3) || (seconds === 4) || (seconds % 10 === 2 && seconds !== 12) || (seconds % 10 === 3 && seconds !== 13) || (seconds % 10 === 4 && seconds !== 14) ? document.getElementById('seconds').innerHTML = `<time>${seconds}</time> секунди` :
            document.getElementById('seconds').innerHTML = `<time>${seconds}</time> секунд`
}

scoreOfTime();
setInterval(scoreOfTime, 1000);
