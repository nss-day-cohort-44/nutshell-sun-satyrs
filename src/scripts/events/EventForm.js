// Author: Will
// Purpose: Form that allows the user to save a new event

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


// add eventlistener on add new event button from event list


// need to save input info and pass through saveEvent