/*
author: davidb
purpose: filter tasks by userId and build out task card and render to DOM
*/

// import external modules and components
import { getUsers, useUsers } from '../users/UserDataProvider.js'
import { getTasks, useTasks } from './TaskDataProvider.js'
// import { renderTaskForm } from './TaskDataProvider.js'
import { TaskAsHTML } from './TaskHTML.js'
import { taskButton } from './TaskButton.js'

// define eventHub scope to be top level element in index.html
const eventHub = document.querySelector(".container")

// get a reference to the target HTML element
const targetElement = document.querySelector("#tasks")

// Listen for the custom event dispatched from
eventHub.addEventListener("taskStateChanged", () => TaskList() )

// Component state variables with initial values
let tasks = []
let users = []

export const TaskList = () => {
    getUsers()
    .then(getTasks)
    .then( () => {
        tasks = useTasks()
        users = useUsers()

        render()
    })
}

// filter tasks by userId and build out task card and render to DOM
const render = () => {
    let taskHTMLRep = ""

    const activeUserTasks = tasks.filter(task => task.userId === parseInt(sessionStorage.getItem("activeUser")))
    for ( const task of activeUserTasks) {
        taskHTMLRep += TaskAsHTML(task)
    }
    const button = taskButton()
    targetElement.innerHTML = `
    <h3>User Task</h3>
        ${button}
        ${taskHTMLRep}
    `
}