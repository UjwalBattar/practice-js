// import Promise from 'promise';
import {
    resolve
} from 'path';
import {
    rejects
} from 'assert';

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
        addBarToQueue(loading);
    });
}

function addBarToQueue(func) {
    if (!_loading) {
        _loading = true;
        loadingQueue.push(func);
        initiateLoading();
    } else {
        console.log('hi');
        loadingQueue.push(func);
    }
}

function initiateLoading() {
    let func = loadingQueue.pop();
    console.log(_loading);
    console.log('1', loadingQueue);
    func();

    if (loadingQueue.length > 0) {
        initiateLoading();
    } else {
        _loading = false;
    }
    console.log('2', loadingQueue);
}

const loading = () => {
    const loadingBar = document.createElement('DIV');
    loadingBar.classList.add('loading-bar');
    const loadingColor = document.createElement('DIV');
    progressBarContainer.appendChild(loadingBar);
    loadingBar.appendChild(loadingColor);
    loadingColor.classList.add('loading-bar-color');

};

document.addEventListener('DOMContentLoaded', () => {
    progressBarContainer = document.getElementById('progress-bar');
    loadProgressBarsButton();
});