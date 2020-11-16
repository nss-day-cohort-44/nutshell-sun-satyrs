/*
Author: Travis Stevenson
Purpose: This module is responsible for fetching data from the /users endpoint of our database.json API.
*/

// Define eventHub
const eventHub = document.querySelector(".container")

// Fetch an array of all users that are in API
let arrayOfUsers = []
export const getUsers = () => {
    return fetch('http://localhost:8088/users')
        .then(response => response.json())
        .then(parsedUsers => {
            arrayOfUsers = parsedUsers
            console.log(arrayOfUsers)
        })
}

// Create a copy of arrayOfUsers for data manipulation
export const useUsers = () => {
    return arrayOfUsers.slice()
}

// Save new user to database.json and then update application state.
export const saveUser = user => {
    return fetch("http://localhost:8088/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(getUsers)
    .then(dispatchStateChangeEvent)
}

// This function is used to update the application state. This will be used after modifying anything in the API.
const dispatchStateChangeEvent = () => {
    const userStateChanged = new CustomEvent("userStateChanged")

    eventHub.dispatchEvent(userStateChanged)
}