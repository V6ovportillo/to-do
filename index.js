//HTML de las fechas
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

//Task container
const taskContainer = document.getElementById('taskContainer');

//Input
const taskName = document.getElementsByName('taskName');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
}

setDate();

const addNewTask = (event) => {
    event.preventDefault();
    const {value} = event.target.taskText;
    if(!value) return;
    //Tomo la información del input;
    let taskElement = document.createElement('div');
    taskElement.classList.add('task','roundBorder');
    taskElement.addEventListener('click', changeTaskState);
    taskElement.innerText = value;
    //Prepend sirve para agregarlo al principio
    taskContainer.prepend(taskElement);
    event.target.reset();
}

const changeTaskState = (event) => {
    event.target.classList.toggle('done');
}
const orderByTodo = () => {
    const toDo = [];
    const done = [];
    taskContainer.childNodes.forEach(element => {
        element.classList.contains('done') ? done.push(element) : toDo.push(element);
    });

    return [...toDo, ...done];
}

const renderOrderTask = () => {
    orderByTodo().forEach(element => {
        taskContainer.appendChild(element);
    });
}
