// Author: Will
// Purpose: This module is responsible for retrieving, updating and 
// deleting friend objects from the json file

const eventHub = document.querySelector(".container")

// this function will be called after a friend is saved/deleted to
// re-render the friend list without having to refresh
const dispatchStateChangeEvent = () => {
    const eventStateChanged = new CustomEvent("friendStateChanged")

    eventHub.dispatchEvent(eventStateChanged)
}

// empty array to store friends
let friends = []

// retrieves friends from json file, parses them and adds them to an empty array
export const getFriends = () => {
    return fetch("http://localhost:8088/friends")
        .then(res => res.json())
        .then(parsedFriends => {
            friends = parsedFriends
        })
}

// creates a copy of the friends array
export const useFriends = () => {
    return friends.slice()
}

// posts new friend objects to the json file, invokes getFriends() and dispatchStateChangeEvent()
export const saveFriend = friend => {
    return fetch("http://localhost:8088/friends", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(friend)
    })
    .then(getFriends)
    .then(dispatchStateChangeEvent)
}

// deletes friend object from the json file, invokes getFriends() and dispatchStateChangeEvent()
export const deleteFriend = friendId => {
    return fetch(`http://localhost:8088/friends/${friendId}`, {
        method: "DELETE"
    })
    .then(getFriends)
    .then(dispatchStateChangeEvent)
}