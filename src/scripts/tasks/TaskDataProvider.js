/*
author : davidb
purpose: Provides CRUD operations against api/database.json API objects
*/

// hang eventHub on top level index.html element so we hear all events
const eventHub = document.querySelector(".container")

// this function will be called after a task is saved/deleted to 
// re-render the event list without having to refresh
const dispatchStateChangeEvent = () => {
    const eventStateChanged = new CustomEvent("taskStateChanged")

    eventHub.dispatchEvent(taksStateChanged)
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


