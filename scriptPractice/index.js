let count = 0;

const plusButton = document.getElementById('plusButton');
const minusButton = document.getElementById('minusButton');
const clearButton = document.getElementById('clearButton');
const displayCount = document.getElementById('displayCount');

const addOne = () => {
    count++;
    displayCount.innerHTML = count;
    console.log(count);
};

const subtractOne = () => {
    count--;
    displayCount.innerHTML = count;
    console.log(count);
};

const clear = () => {
    count = 0;
    displayCount.innerHTML = count;
    console.log(count);
};

plusButton.addEventListener('click', addOne);
minusButton.addEventListener('click', subtractOne);
clearButton.addEventListener('click', clear);

displayCount.innerHTML = count;

// die practice

const rollButton = document.getElementById('rollButton');
const displayDie = document.getElementById('displayDie');

const rollDie = () => {
    const value = Math.floor(Math.random() * 6) + 1;
    displayDie.innerHTML = value;
};

rollButton.addEventListener('click', rollDie);