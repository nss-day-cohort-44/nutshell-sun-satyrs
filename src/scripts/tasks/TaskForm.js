/*
author : davidb
purpose: responsible for creating and rendering the task form
*/

// import components from external modules
import { saveTask } from './TaskDataProvider.js'

// get a reference to the target HTML element
const contentTarget = document.querySelector(".container--right")

// define eventHub scope to be top level element in index.html
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
// eventHub.addEventListener("createTaskClicked", () => renderTaskForm() )

// listening for save button on form. storing new object with values. passing through save function
eventHub.addEventListener("click", clickEvent => {

    if(clickEvent.target.id === "task--saveButton") {
        const userId = parseInt(sessionStorage.getItem("activeUser"))
        const task = document.querySelector("#task--name").value
        const dueDate = document.querySelector("#task--dueDate").value
        const complete = false
        
        const newTask = {
            userId,
            task,
            dueDate,
            complete
        }
        // invoke imported saveTask component
        saveTask(newTask)
        // 
    }
})