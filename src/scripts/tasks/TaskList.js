// When the user is viewing their task list
// completed task
// And prevent the task from being displayed in the list
// filter based on completed property, this component will never render a completed task

// Given a user is on the task list and wants to remove a task
// When when the user performs a gesture on the delete affordance
// Then the task should be removed from the database
// And the task should be removed from the task list


// loop through and render get to dom
// conditionals - if its completed. do not render completed task
// listeners - create task button to nutshell.js?

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

const render = () => {
    let taskHTMLRep = ""

    const activeUserTasks = tasks.filter(task => task.userId === parseInt(sessionStorage.getItem("activeUser")))
    for ( const task of activeUserTasks) {
        taskHTMLRep += TaskAsHTML(task)
    }
    const button = taskButton()
    console.log(button)
    targetElement.innerHTML = `
    <h3>User Task</h3>
        ${button}
        ${taskHTMLRep}
    `
}