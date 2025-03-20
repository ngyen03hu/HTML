
const textElement = document.getElementById('text');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');

increaseButton.addEventListener('click', () => {
    let currentSize = parseFloat(window.getComputedStyle(textElement).fontSize);
    textElement.style.fontSize = (currentSize + 2) + 'px';
});

decreaseButton.addEventListener('click', () => {
    let currentSize = parseFloat(window.getComputedStyle(textElement).fontSize);
    textElement.style.fontSize = (currentSize - 2) + 'px';
});
