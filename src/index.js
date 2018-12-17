document.addEventListener('click', (e) => {
    // console.log(e.target.tagName === 'DIV');
    if (e.target.tagName === 'DIV') {
        alert(`Hi! I am: ${e.target.id}`);
    }
});

let _loading = false;
const loadingQueue = [];


let progressBarContainer;

function loadProgressBarsButton() {
    const loadButton = document.createElement('BUTTON');
    progressBarContainer.appendChild(loadButton);
    loadButton.id = 'click-me';
    loadButton.innerHTML = 'click me!';
    loadButton.addEventListener('click', () => {
        addBarToQueue();
    });
}

function addBarToQueue() {
    if (!_loading) {
        _loading = true;
        loadingQueue.push(true);
        initiateLoading();
    } else {
        loadingQueue.push(true);
    }
}

function initiateLoading() {
    while (loadingQueue.length > 0) {
        console.log('hi');
        // loadingQueue.pop();
    }
    _loading = false;
}

// const loadingBar = document.createElement('DIV');
// loadingBar.setAttribute('style', 'height: 30px');
// loadingBar.setAttribute('style', 'height: 30px');

document.addEventListener('DOMContentLoaded', () => {
    progressBarContainer = document.getElementById('progress-bar');
    loadProgressBarsButton();
});