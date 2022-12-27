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