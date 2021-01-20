const todoList = ['Feed the Cat'];

let response = prompt('Hello, what would you like to do?');

while (response !== 'quit') {
    if (response === 'list') {
        console.log('******************');
        for (let todo of todoList) {
            console.log(`${todoList.indexOf(todo)}: ${todo}`);
        }
        console.log('******************');
    } else if (response === 'new') {
        response = prompt('Please enter a todo');
        todoList.push(response);
        console.log(`${response} was added to todo list`);
    } else if (response === 'delete') {
        response = prompt('Enter index of todo to be deleted');
        const deletedItem = todoList.splice(response, 1);
        console.log(`${deletedItem[0]} was deleted from todo list`);
    }
    response = prompt('Hello, what would you like to do?');
}

console.log('You quitter!');