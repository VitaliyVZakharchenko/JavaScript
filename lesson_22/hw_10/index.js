'use strict';

const tasks = [
    { text: 'Buy milk', done: false, id: '1' },
    { text: 'Pick up Tom from airport', done: false, id: '2' },
    { text: 'Visit party', done: false, id: '3' },
    { text: 'Visit doctor', done: true, id: '4' },
    { text: 'Buy meat', done: true, id: '5' },
];



const listElem = document.querySelector('.list');

const renderTasks = (tasksList) => {
    listElem.innerHTML = '';
    const tasksElems = tasksList
        .slice()
        .sort((a, b) => a.done - b.done)
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

    const task = tasks.find(task => task.id === event.target.dataset.taskId);
    
    task.done = event.target.checked;  

    renderTasks(tasks);
}



const createBtn = document.querySelector('.btn');
createBtn.addEventListener('click', createTask);

function createTask() {
    const input = document.querySelector('.task-input');
    const inputVal = input.value;
    if (!inputVal) return;

    tasks.push = {
        text: input.value,
        done: false,
        id: `${tasks.length + 1}`,
        // id: Math.random().toString(),

    }
    
    input.value = '';
   
    renderTasks(tasks);
}