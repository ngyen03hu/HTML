let content = document.getElementsByClassName('content')[0];
let showe = document.getElementsByClassName('show')[0];
let hide = document.getElementsByClassName('hide')[0];

hide.addEventListener('click', () => {
    content.style.display = 'none';
});
showe.addEventListener('click', () => {
    content.style.display = 'block';
});