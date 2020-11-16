/*
author : davidb
purpose: Provides CRUD operations against api/database.json API objects
*/

// init array to hold tasks returned by useTasks()
let tasks = []

// return a copy of the tasks array
export const useTasks = () => {
    return tasks.slice();
}

// fetch & format data and populate tasks array

