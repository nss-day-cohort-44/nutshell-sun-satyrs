import { getEvents, useEvents } from "./events/EventDataProvider.js"
import { EventList } from "./events/EventList.js"

const contentTarget = document.querySelector(".welcome")

export const Nutshell = () => {
    // Render all your UI components here
    contentTarget.innerHTML += "<h1>Welcome to Nutshell!</h1>"
   EventList()
}