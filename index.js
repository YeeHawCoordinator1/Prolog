const fuckMyLIfe = document.querySelectorAll('.small_button');

fuckMyLIfe.forEach(fuckMyLIfe => {
    fuckMyLIfe.addEventListener('click', () => {
        fuckMyLIfe.classList.add('clicked');
    });
});