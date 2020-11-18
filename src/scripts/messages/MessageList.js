/*
Author: Travis Stevenson
Purpose: This module is responsible for rendering an array of all messages to the DOM.
*/

import { Message } from "./Message.js"
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

    const activeUserMessages = messages.filter(message => message.userId === parseInt(sessionStorage.getItem("activeUser")))

    for (const messageObj of activeUserMessages) {
        messageAsHTML += Message(messageObj)
    }
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