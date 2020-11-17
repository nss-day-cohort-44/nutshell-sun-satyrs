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
import { getTask, useTasks } from './TaskDataProvider.js'
import { renderTaskForm } from './TaskDataProvider.js'
import { TaskAsHTML } from './TaskHTML.js'

// define eventHub scope to be top level element in index.html
const eventHub = document.querySelector(".container")

// get a reference to the target HTML element
const targetElement = document.querySelector("#task")

// Listen for the custom event dispatched from
eventHub.addEventListener("taskStateChanged", () => taskList() )

// Component state variables with initial values
