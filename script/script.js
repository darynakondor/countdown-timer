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
        (days === 2) || (days == 3) || (days === 4) || (days % 10 === 2 && !days !== 12) || (days % 10 === 3 && days !== 13) || (days % 10 === 4 && days !== 14) ? document.getElementById('days').innerHTML = `<time>${days}</time> днI` :
            document.getElementById('days').innerHTML = `<time>${days}</time> днIв`

    document.getElementById('hours').innerHTML = `<time>${hours}</time> год`
    document.getElementById('minutes').innerHTML = `<time>${minutes}</time> хв`
    document.getElementById('seconds').innerHTML = `<time>${seconds}</time> сек`
}

scoreOfTime();
setInterval(scoreOfTime, 1000);
