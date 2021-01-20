const randomRBG = () => {
    return Math.floor(Math.random() * 255) + 1;
}

const generateColor = () => {
    return `rgb(${randomRBG()}, ${randomRBG()}, ${randomRBG()})`;
}

const bodyBackground = document.querySelector('body');

const setBackground = () => {
    bodyBackground.style.backgroundColor = generateColor();
}

const mainButton = document.querySelector('#mainButton');

mainButton.addEventListener('click', setBackground);