class Todo {

    constructor(todo, id) {
        this.id = id;
        this.definition = todo;
    }

    showTodo(domElement) {
        const li = document.createElement('li');
        li.textContent = `${this.id}: ${this.definition}.`;
        li.id = this.id;
        const removeButton = document.createElement('button');
        removeButton.textContent = '-';
        removeButton.id = this.id;
        domElement.appendChild(li);
        li.append(removeButton);
    }
}


class List {

    constructor() {
        this.todoList = [];
    }

    addTodo(Todo) {
        this.todoList.push(Todo)
    }

    removeTodo(id) {
        let realID = parseInt(id);
        this.todoList = this.todoList.filter(todo => todo.id !== realID);
    }

    showList(domElement) {
        domElement.innerHTML = '';
        for (let todo of this.todoList) {
            todo.showTodo(domElement);
        }
    }
}

const MyTodoList = new List();

let form = document.querySelector('.search form');

let id = 1;

let message = document.querySelector('div.message');

form.addEventListener('submit', event => {
    event.preventDefault();

    if (event.target.todo.value !== '' || event.target.todo.value !== undefined) {
        const MyNewTodo = new Todo(event.target.todo.value, id);
        id++;
        MyTodoList.addTodo(MyNewTodo);
        MyTodoList.showList(document.getElementById('todo-ul'));
    }

    if (MyTodoList.todoList.length !== 0) {
        message.classList.add('empty');
    }

});


let licontainer = document.getElementById('todo-ul');

licontainer.addEventListener('click', event => {

    if (event.target.type === 'submit') {
        MyTodoList.removeTodo(event.target.id);

        MyTodoList.showList(document.getElementById('todo-ul'));
    }

    if (MyTodoList.todoList.length === 0) {
        message.classList.remove('empty');
        id = 0;
    }

});












