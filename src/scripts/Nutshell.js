import { Message } from "./messages/Message.js"
import { MessageForm } from "./messages/MessageForm.js"
import { MessageList } from "./messages/MessageList.js"

const contentTarget = document.querySelector(".container--left")

export const Nutshell = () => {
    // Render all your UI components here
    MessageList()
    MessageForm()
}