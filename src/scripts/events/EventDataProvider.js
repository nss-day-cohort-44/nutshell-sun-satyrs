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

// retrieves existing events from json file, parses them and adds them to an empty array
export const getEvents = () => {
    return fetch("http://localhost:8088/events")
        .then(res => res.json())
        .then(parsedEvents => {
            events = parsedEvents
        })
}

// creates a slice of the events array sorted by date
export const useEvents = () => {
    let sortedArray = events.slice()
    sortedArray = events.sort(
        (currentEvents, nextEvents) =>
            Date.parse(currentEvents.date) - Date.parse(nextEvents.date)
    )
        return sortedArray
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
    return fetch(`http://localhost:8088/events/${eventId}`, {
        method: "DELETE"
    })
    .then(getEvents)
    .then(dispatchStateChangeEvent)
}