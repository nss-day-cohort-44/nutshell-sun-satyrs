/*
Author: Travis Stevenson
Purpose: This module is responsible for creating an HTML representation of a single messageObj.
*/
// IMPORT STATEMENTS START HERE
import { deleteMessage } from "./MessageDataProvider.js"

// Define eventHub for events.
const eventHub = document.querySelector(".container")

// MAIN COMPONENT OF MODULE
export const Message = (messageObj, matchedUser) => {
    return `
        <section class="message" id="${messageObj.id}">
            <div class"message__content">From ${matchedUser.username}: ${messageObj.message} <br>Sent: ${messageObj.timestamp}</div>
            <button id="deleteMessage--${messageObj.id}"> Delete Message </button>
        </section>
        `
}


// EVENTS START HERE

// This event is responsible for deleting a newMessage from database.json API.
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteMessage--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        deleteMessage(id)
    }
})