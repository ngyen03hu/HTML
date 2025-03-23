let textInput = document.getElementById('textInput');
let countButton = document.getElementById('countButton');
let result = document.getElementById('result');

countButton.addEventListener('click', () => {
    let text = textInput.value;
    let charCount = text.length;
    result.textContent = `Số ký tự: ${charCount}`;
});