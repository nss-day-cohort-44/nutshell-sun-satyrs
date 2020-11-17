// Author: Will
// Purpose: Responsible for rendering the list of events to the dom for the active user

import { useUsers, getUsers } from "../users/UserDataProvider.js"
import { useEvents, getEvents } from "./EventDataProvider.js"
import { renderEventForm } from "./EventForm.js"
import { EventAsHTML } from "./Event.js"

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector("#events")


eventHub.addEventListener("eventStateChanged", () => EventList())

console.log()

// empty arrays for users and events
let users = []
let events = []

// responsible for filling arrays with users and events and calling render
export const EventList = () => {
    getUsers()
    .then(getEvents)
    .then(() => {
        users = useUsers()
        events = useEvents()

        render()
    })
}

// responsible for filtering events for current user and rendering
const render = () => {
    let eventHTMLRep = ""

    const activeUserEvents = events.filter(event => event.userId === parseInt(sessionStorage.getItem("activeUser")))
    console.log(events)
    console.log(activeUserEvents)
    console.log(sessionStorage.getItem("activeUser"))

    for (const event of activeUserEvents) {
    eventHTMLRep += EventAsHTML(event)
    }
    contentElement.innerHTML = `
        <h3>Upcoming Events</h3>
        <button id="addEvent">Add Event</button>
        ${eventHTMLRep}
    `
}