let form = document.querySelector('form');
form.addEventListener('submit', addTodo)

function addTodo(e) {
    e.preventDefault();
    let element = document.createElement('li');
    let input = document.querySelector('#item').value;
    element.innerText = input;
    let button = document.createElement('button');
    button.innerText = 'X';
    button.addEventListener('click', removeTodo);
    element.appendChild(button);
    let ul = document.querySelector('ul');
    ul.appendChild(element)
    console.dir(input);
}

function removeTodo(e) {
    e.target.parentNode.remove();
}