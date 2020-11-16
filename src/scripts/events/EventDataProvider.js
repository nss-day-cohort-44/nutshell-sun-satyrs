// Author: Will
// Purpose: This module is responsible for retrieving, updating and 
// deleting event objects from the json file

const eventHub = document.querySelector(".container")

// this function will be called after an event is saved/deleted to 
// re-render the event list without having to refresh
const dispatchStateChangeEvent = () => {
    const eventStateChanged = new CustomEvent("eventStateChanged")

    eventHub.dispatchEvent(eventStateChanged)
}

// empty array to store events
let events = []

// retrieves existing notes from json file, parses them and adds them to an empty array
export const getEvents = () => {
    return fetch("http://localhost:8088/events")
        .then(res => res.json())
        .then(parsedEvents => {
            events = parsedEvents
            console.log(parsedEvents)
        })
}

// creates a slice of the events array
export const useEvents = () => {
    return events.slice()
}

// posts new event objects to the json file, invokes getEvents() and dispatchStateChangeEvent()
export const saveEvent = event => {
    return fetch("http://localhost:8088/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    })
    .then(getEvents)
    .then(dispatchStateChangeEvent)
}

// deletes event object from the json file, invokes getEvents() and dispatchStateChangeEvent()
export const deleteEvent = eventId => {
    return fetch(`httl://localhost:8088/events/${eventId}`, {
        method: "DELETE"
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}