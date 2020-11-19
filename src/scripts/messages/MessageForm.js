/*
Author: Travis Stevenson
Purpose: This module is responsible for rendering a form to ".container--right" so that User can create new messages to send. 
*/

import { saveMessage, deleteMessage } from "./MessageDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".container--right")

export const MessageForm = () => {
    contentTarget.innerHTML = `
        <input id="message--content" type="text" placeholder="New message"/>
        <button id="message--sendButton"> Send Message </button>
    `
}

//                          EVENTS START HERE

// Listen for a click on "New Message" button from MessageList module. Respond by rendering the MessageForm component to right side of screen, so that the user can type a new message.
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "createMessage") {
        MessageForm()
    }
})

// This event is responsible for saving a newMessage to database.json API.
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "message--sendButton") {
        // The "+" on the line below is shorthand for parseInt()
        const userId = +(sessionStorage.getItem("activeUser"))
        const message = document.getElementById("message--content").value
        const timestamp = new Date().toLocaleString()

        const newMessage = {
            userId,
            message,
            timestamp
        }
        saveMessage(newMessage)
    }
})