// Author: Will
// Purpose: Responsible for HTML for individual event

export const EventAsHTML = (event) => {
     return `
        <section class="event" id="${event.id}">
            <h3>${event.name}</h3>
            <div class="event__date"${event.date}</div>
            <div class"event__location>${event.location}</div>
            <button id="deleteEvent--${event.id}">Delete Event</button>
        </section>
    `
}


