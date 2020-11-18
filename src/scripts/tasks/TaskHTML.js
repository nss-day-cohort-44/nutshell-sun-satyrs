/*
author: davidb
purpose: responsible for HTML for individual task
*/

import { deleteTask, updateTask } from './TaskDataProvider.js'

const eventHub = document.querySelector(".container")

export const TaskAsHTML = (task) => {
    return `
    <section class="task" id="${task.id}">
            <h3>${task.task}</h3>
            <div class="task__date">Due Date: ${task.dueDate}</div>
            <div>
                <input type="checkbox" id="taskComplete--${task.id}" name="complete">
                <label for="taskComplete">Complete</label>
            </div>
            <button id="deleteTask--${task.id}">Delete Task</button>
        </section>
    `
}

// listens for delete button. Separates id and passes the id through the delete function 
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith(`deleteTask--`)) {
        const [prefix, id] = clickEvent.target.id.split("--")

        deleteTask(id)
    }
})

// listens for complete checkbox. Separates id and passes the id through the updateTask function 
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("taskComplete--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        console.log(`task complete button selected for taskComplete--${id}`)
        console.log(id)
        updateTask(id)
    }
})


// Given a user wants to mark a task complete

// TaskHTML.js
// Then there should be a checkbox next to each task that, 
    // update TaskHTML so each task has a checkbox - done
    // create/dispatch new custom event when checkbox is selected - done
    // invoke updateTask(id) in eventListener


// TaskList.js
    // revisit render function to only render task with complete === false
    // build a new array with filter or similar




// Better Pattern
    // TaskDataProvider.js
// when clicked, should mark the task as complete in the database
    // add eventListener for checkbox event
    // invoke updateTask() as event action


    // <div class="task__status">Complete:${task.complete}</div>