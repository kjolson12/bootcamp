const randomRBG = () => {
    return Math.floor(Math.random() * 255) + 1;
}

const generateColor = () => {
    return `RGB(${randomRBG()}, ${randomRBG()}, ${randomRBG()})`;
}

const bodyBackground = document.querySelector('body');
const h2 = document.querySelector('h2');
const h1 = document.querySelector('h1');

const setBackground = () => {
    const color = generateColor();
    bodyBackground.style.backgroundColor = color;
    h2.innerHTML = color;
    h2.style.color = 'white';
    h1.style.color = 'white';
}

const mainButton = document.querySelector('#mainButton');

mainButton.addEventListener('click', setBackground);