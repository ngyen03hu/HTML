
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const saveButton = document.getElementById('save-button');
const greeting = document.getElementById('greeting');
const greetingMessage = document.getElementById('greeting-message');
const changeNameButton = document.getElementById('change-name-button');

// Kiểm tra localStorage và hiển thị lời chào nếu đã có tên
const savedName = localStorage.getItem('userName');
if (savedName) {
    displayGreeting(savedName);
}

saveButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name) {
        localStorage.setItem('userName', name);
        displayGreeting(name);
    }
});

changeNameButton.addEventListener('click', () => {
    localStorage.removeItem('userName');
    nameForm.classList.remove('hidden');
    greeting.classList.add('hidden');
});

function displayGreeting(name) {
    greetingMessage.textContent = `👋 Chào bạn, ${name}!`;
    nameForm.classList.add('hidden');
    greeting.classList.remove('hidden');
}
