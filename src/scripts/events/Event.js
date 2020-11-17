// Author: Will
// Purpose: Responsible for HTML for individual event

import { deleteEvent } from "./EventDataProvider.js"

export const EventAsHTML = (event) => {
     return `
        <section class="event" id="${event.id}">
            <h3>${event.name}</h3>
            <div class="event__date">${event.date}</div>
            <div class"event__location">${event.location}</div>
            <button id="deleteEvent--${event.id}">Delete Event</button>
        </section>
    `
}

const eventHub = document.querySelector(".container")

// listens for delete button. Separates id and passes the id through the delete function 
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteEvent--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        deleteEvent(id)
    }
})
