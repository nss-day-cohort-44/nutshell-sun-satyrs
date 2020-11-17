/*
author : davidb
purpose: responsible for creating and rendering the task form
*/
// Then a form should be presented to the user with a field to enter in the task name
// And a field to enter in the expected completion date
// POST method to replace object
// timestamp via date.now()


// import components from external modules
import { saveTask } from './TaskDataProvider.js'

// get a reference to the target HTML element
const taskTarget = document.querySelector("#tasks")

// // define eventHub scope to be top level element in index.html
const eventHub = document.querySelector('.container')

// render form fields to the DOM
export const renderTaskForm = () => {
    contentTarget.innerHTML = `
        <h2>Save a New Task</h2>
        <input id="task--name" type="text" placeholder="Name of the task"/>
        <input id="task--dueDate" type="date"/>
        <button id="task--saveButton">Save Task</button>
    `
}




// event listener to capture click events