'use strict';

const tasks = [
    { text: 'Buy milk', done: false, id: '1', date: new Date(), doneDate: null },
    { text: 'Pick up Tom from airport', done: false, id: '2', date: new Date(), doneDate: null },
    { text: 'Visit party', done: false, id: '3', date: new Date(), doneDate: null },
    { text: 'Visit doctor', done: true, id: '4', date: new Date(), doneDate: new Date() },
    { text: 'Buy meat', done: true, id: '5', date: new Date(), doneDate: new Date() },
];


const listElem = document.querySelector('.list');

const sortDoneDate = (a, b) => {
    if (a.done - b.done !== 0) {
        return a.done - b.done;
    }
    
    if (a.done === true) {
        return new Date(b.doneDate) - new Date(a.doneDate);
    }
    
    return new Date(b.date) - new Date(a.date);
};

const renderTasks = (tasksList) => {
    listElem.innerHTML = '';
    const tasksElems = tasksList
        .slice()
        .sort(sortDoneDate)
        .map(( task ) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('data-id', task.id);
            checkbox.checked = task.done;
            checkbox.classList.add('list__item-checkbox');
            if (task.done) {
                listItemElem.classList.add('list__item_done');
            };
            listItemElem.append(checkbox, task.text);
            return listItemElem;
        });

    listElem.append(...tasksElems);
};

renderTasks(tasks);




listElem.addEventListener('click', updateTask);

function updateTask(event) {
    const classes = event.target.classList;

    if (!classes.contains('list__item-checkbox')) return;

    const task = tasks.find(task => task.id === event.target.dataset.id);
    
    task.done = event.target.checked;

    task.doneDate = new Date();
    
    renderTasks(tasks);
}



const createBtn = document.querySelector('.btn');
createBtn.addEventListener('click', createTask);

function createTask() {
    const input = document.querySelector('.task-input');
    const inputValue = input.value;
    if (!inputValue) return;
    // console.log(inputValue);

    tasks.push ({
        // text: text,
        text: inputValue,
        done: false,
        id: `${tasks.length + 1}`,
        date: new Date(),
        doneDate: null
    });
    
    input.value = '';
   
    renderTasks(tasks);
}