// Author: Will
// Purpose: Responsible for rendering the list of events to the dom for the active user

import { useUsers, getUsers } from "../users/UserDataProvider.js"
import { useEvents, getEvents } from "./EventDataProvider.js"
import { EventAsHTML } from "./Event.js"
import { getFriends, useFriends } from "../friends/FriendDataProvider.js"
import { renderEventForm } from "./EventForm.js"

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector("#events")


eventHub.addEventListener("eventStateChanged", () => EventList())


// empty arrays for users and events
let users = []
let events = []
let friends = []

// responsible for filling arrays with users and events and calling render
export const EventList = () => {
    getUsers()
    .then(getEvents)
    .then(getFriends)
    .then(() => {
        users = useUsers()
        events = useEvents()
        friends = useFriends()

        render()
        firstEvent()
    })
}

let activeUserEvents = []
let activeUsersFriendsEvents = []
let activeUserFriendRelationships = []
// responsible for filtering events for current user and rendering
const render = () => {
    let eventHTMLRep = ""

    // matching the active id with the user id from the events 
    activeUserEvents = events.filter(event => event.userId === parseInt(sessionStorage.getItem("activeUser")))
    
    // matching friend/relationship userId with the active user id 
    activeUserFriendRelationships = friends.filter(friend => friend.userId === parseInt(sessionStorage.getItem("activeUser")))
    
    // looping through the active user's friends' and matching their id's to event id's
    activeUserFriendRelationships.forEach(rel => {
        
        const friendsEvent = events.find(event => 
            
            event.userId === rel.userFriendId
        )
        if(friendsEvent !== undefined){
            activeUsersFriendsEvents.push(friendsEvent)
        }
    })
    

    for (const event of activeUserEvents) {
    eventHTMLRep += EventAsHTML(event)
    }
    contentElement.innerHTML = `
        <h3>Upcoming Events</h3>
        <button id="addEvent">Add Event</button>
        ${eventHTMLRep}
    `
}

// identifies the first object in the list and gives it a new class
const firstEvent = () => {
    document.getElementById(activeUserEvents[0].id).classList.add("event__first")
}
