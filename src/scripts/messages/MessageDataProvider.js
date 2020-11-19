/*
Author: Travis Stevenson
Purpose: This module is responsible for fetching data from the /messages endpoint of our database.json API. All CRUD functionality for messages will be handled here.
*/

// Define eventHub
const eventHub = document.querySelector(".container")

// Fetch an array of all messages that are in API
let arrayOfMessages = []
export const getMessages = () => {
    return fetch('http://localhost:8088/messages')
        .then(response => response.json())
        .then(parsedMessages => {
            arrayOfMessages = parsedMessages
        })
}

// Create a copy of arrayOfMessages for data manipulation
export const useMessages = () => {
    let messagesSortedByTimestamp = arrayOfMessages.slice()
    messagesSortedByTimestamp = arrayOfMessages.sort(
        (currentMessage, nextMessage) =>
        Date.parse(currentMessage.timestamp) - Date.parse(nextMessage.timestamp)
    )
    return messagesSortedByTimestamp
}

// Save new messageObj to database.json and then update application state.
export const saveMessage = messageObj => {
    return fetch("http://localhost:8088/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageObj)
    })
    .then(getMessages)
    .then(dispatchStateChangeEvent)
}

// Delete an existing messageObj from database.json and then update application state.
export const deleteMessage = messageId => {
    return fetch(`http://localhost:8088/messages/${messageId}`, {
        method: "DELETE",

    })
    .then(getMessages)
    .then(dispatchStateChangeEvent)
}

// This function is used to update the application state. This will be used after modifying anything in the API.
const dispatchStateChangeEvent = () => {
    const messageStateChanged = new CustomEvent("messageStateChanged")

    eventHub.dispatchEvent(messageStateChanged)
}