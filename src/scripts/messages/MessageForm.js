/*
Author: Travis Stevenson
Purpose: This module is responsible for rendering a form to ".container--right" so that User can create new messages to send. 
*/

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".container--right")

export const MessageForm = () => {
    contentTarget.innerHTML = `
        <input id="message--" type="text" placeholder="New message"/>
        <button id="message--sendButton"> Send Message </button>
    `
}