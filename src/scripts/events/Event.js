// Author: Will
// Purpose: Responsible for HTML for individual event

import { deleteEvent } from "./EventDataProvider.js"
import { weatherHTML } from "../weather/Weather.js"

export const EventAsHTML = (event) => {
     return `
        <section class="event" id="${event.id}">
            <h3>${event.name}</h3>
            <div class="event__date">${new Date(event.date).toLocaleDateString('en-US')}</div>
            <div class"event__location">${event.location}</div>
            <button id="weatherButton--${event.id}">Show Weather</button>
            <button id="deleteEvent--${event.id}">Delete Event</button>
            <div class="weatherDisplay--${event.id}"></div>
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

// listens for weather button and invokes weather function
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("weatherButton--")){
       
        const [prefix, id] = clickEvent.target.id.split("--")

        // needed to display weather for the appropriate event
        const contentElement = document.querySelector(`.weatherDisplay--${id}`)
        const weather = weatherHTML()
        contentElement.innerHTML = `${weather}`
    }
})