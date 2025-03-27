document.addEventListener('DOMContentLoaded', () => {
    let savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
});

function onButtunRed() {
    document.body.style.backgroundColor = "red";
    localStorage.setItem('backgroundColor', "red");
}

function onButtunBlue() {
    document.body.style.backgroundColor = "blue";
    localStorage.setItem('backgroundColor', "blue");
}

function onButtunYellow() {
    document.body.style.backgroundColor = "yellow";
    localStorage.setItem('backgroundColor', "yellow");
}

function onButtunPurple() {
    document.body.style.backgroundColor = "purple";
    localStorage.setItem('backgroundColor', "purple");
}
