/*
author: davidb
purpose: responsible for HTML for individual task
*/

import { deleteTask } from './TaskDataProvider.js'

const eventHub = document.querySelector(".container")

export const TaskAsHTML = (task) => {
    return `
    <section class="task" id="${task.id}">
            <h3>${task.task}</h3>
            <div class="task__date">${task.dueDate}</div>
            <div class="task__status">${task.complete}</div>
            <button id="deleteTask--${task.id}">Delete Task</button>
        </section>
    `
}

// listens for delete button. Separates id and passes the id through the delete function 
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteTask--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        deleteTask(id)
    }
})


// Given a user wants to mark a task complete

// Then there should be a checkbox next to each task that, when clicked, should mark the task as complete in the database

// 