// Author: Will
// Purpose: Responsible for HTML for individual friend

import { deleteFriend } from "./FriendDataProvider.js"

export const FriendAsHTML = (user, relationship) => {
    return `
        <section class="friend" id="friend.id">
            <h3>${user.username}</h3>
            <button id="deleteFriend--${relationship.id}">Unfollow</button>
        </section>
    `
}

const eventHub = document.querySelector(".container")

// listens for delete button. Separates id and passes the id through the delete function 
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteFriend--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        deleteFriend(id)
    }
})




