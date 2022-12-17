const futureDate = new Date('Jan 1 2023 00:00:00')

function scoreOfTime() {
    const currentDate = new Date()
    difference = futureDate - currentDate;
    day = Math.floor(difference / 60000 / 60 / 24);
    hours = Math.floor(difference / 60000 / 60) % 24;
    minutes = Math.floor(difference / 60000) % 60;
    seconds = Math.floor(difference / 1000) % 60;

    document.getElementById('days').innerText = day;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

scoreOfTime();
setInterval(scoreOfTime, 1000);

function windowLoad() {
    // document.documentElement.classList.add('loaded');
    // createPosition();

    // window.addEventListener('scroll', createPosition);

    // function createPosition() {
    //     const conte
    // }

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
