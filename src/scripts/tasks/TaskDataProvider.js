/*
author : davidb
purpose: Provides CRUD operations against api/database.json API objects
*/

// hang eventHub on top level index.html element so we hear all events
const eventHub = document.querySelector(".container")

// this function will be called after a task is saved/deleted to 
// re-render the event list without having to refresh
const dispatchStateChangeEvent = () => {
    const taskStateChanged = new CustomEvent("taskStateChanged")

    eventHub.dispatchEvent(taskStateChanged)
}

// init array to hold tasks returned by useTasks()
let tasks = []

// return a copy of the tasks array
export const useTasks = () => {
    return tasks.slice();
}

// fetch & format data and populate tasks array
export const getTasks = () => {
    return fetch("http://localhost:8088/tasks")
    .then(response => response.json() )
    .then (
        parsedTasks => {
            console.table(parsedTasks)
            tasks = parsedTasks
        }
    )
}

// post a new event object to the json file, invokes getTasks() and dispatchStateChangeEvent()
export const saveTask = task => {
    return fetch("http://localhost:8088/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    .then(getTasks)
    .then(dispatchStateChangeEvent)
}
// Given a user is on the task list and wants to remove a task
// delete a given event object from the API/database.json, invoke getTasks() and dispatchStateChangeEvent
export const deleteTask = taskId => {
    return fetch(`http://localhost:8088/tasks/${taskId}`, {
        method: "DELETE"
    })
    .then(getTasks)
    .then(dispatchStateChangeEvent)
} 

// not tested, 
export const updateTask = (taskId) => {
    return fetch(`http://localhost:8088/tasks/${taskId}`, {
        method: "PATCH",
        body: JSON.stringify(
            {
                complete: true
            }),
            headers:
            {
               "Content-type": "application/json; charset=UTF-8"
            }
    })
    .then(getTasks)
    .then(console.log(taskId))
    .then(dispatchStateChangeEvent)
        
}

// TaskHTML - render a checkbox on each task card
    // when clicked, should mark the task as complete in the database
    // dispatch event from TaskHTML to be received by TaskDataProvider.js
    // TaskDataProvider.js calls updateTask in response to event

// TaskDataProvider.js - updateTask and eventListener that calls updateTask

// And prevent the task from being displayed in the list
    // update render to only display taks where complete === false
    // maybe build new array populated with only complete == false
