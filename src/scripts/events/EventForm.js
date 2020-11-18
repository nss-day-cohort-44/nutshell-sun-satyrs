// Author: Will
// Purpose: Form that allows the user to save a new event

import { saveEvent } from "./EventDataProvider.js"

const contentTarget = document.querySelector(".container--right")
const eventHub = document.querySelector(".container")

// renders a form in the right container that will allow a user to save a new event
export const renderEventForm = () => {
    contentTarget.innerHTML = `
        <h2>Save a New Event</h2>
        <input id="event--name" type="text" placeholder="Name of the event"/>
        <input id="event--location" type="text" placeholder="City, State"/>
        <input id="event--dateOfEvent" type="date"/>
        <button id="event--saveButton">Save Event</button>
    `
}


// eventlistener on add new event button from event list
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "addEvent") {
        renderEventForm()
    }
})

// listening for save button on form. storing new object with values. passing through save function
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "event--saveButton") {
        const userId = parseInt(sessionStorage.getItem("activeUser"))
        const name = document.querySelector("#event--name").value
        const date = document.querySelector("#event--dateOfEvent").value
        const location = document.querySelector("#event--location").value

        const newEvent = {
            userId,
            name,
            date,
            location
        }
        saveEvent(newEvent)
    }
})

