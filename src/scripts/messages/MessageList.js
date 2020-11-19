/*
Author: Travis Stevenson
Purpose: This module is responsible for rendering an array of all messages to the DOM.
*/

import { Message, GlobalMessage } from "./Message.js"
import { getUsers, useUsers } from "../users/UserDataProvider.js";
import { getMessages, useMessages } from "./MessageDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector("#messages")

let users = []
let messages = []

export const MessageList = () => {
    getUsers()
    .then(getMessages)
    .then(() => {
        users = useUsers()
        messages = useMessages()
        renderMessages()
    })
}

const renderMessages = () => {
    let messageAsHTML = ""

        // The "+" on the lines below is shorthand for parseInt()
    const activeUserMessages = messages.filter(message => message.userId === +(sessionStorage.getItem("activeUser")))
    const globalMessages = messages.filter(message => message.userId !== +(sessionStorage.getItem("activeUser")))

    /* for (const messageObj of messages) {
        messageAsHTML += Message(messageObj)
    } */

    // Match Messages foreign key "userId" to User primary key "id" in order to render only the activeUser's messages and prepend their name to each message.
    activeUserMessages.forEach(taco => {
        const matchedUser = users.find(userToFind => 
            userToFind.id === taco.userId)
        messageAsHTML += Message(taco, matchedUser)
    })
    
    // Match Messages foreign key "userId" to User primary key "id" in order to render every user's messages and prepend their name to each message. 
    globalMessages.forEach(taco => {
        const matchedUser = users.find(userToFind => 
            userToFind.id === taco.userId)
        messageAsHTML += GlobalMessage(taco, matchedUser)
    })

    contentTarget.innerHTML = `
        <h3>Messages</h3>
        <button id="createMessage"> New Message </button>
        ${messageAsHTML}
        `
}


// EVENTS START HERE
eventHub.addEventListener("messageStateChanged", response => {
    MessageList()
})