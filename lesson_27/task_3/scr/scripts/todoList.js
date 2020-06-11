import { onCreateTask } from './createTask.js';
import { onToggleTask } from './updateTask.js';

export const initTodoListHandlers = () => {
    const craateBtnElem = document.querySelector('.create-task-btn');
    craateBtnElem.addEventListener('click', onCreateTask);

    const todoListElem = document.querySelector('.list');
    todoListElem.addEventListener('click', onToggleTask);
};