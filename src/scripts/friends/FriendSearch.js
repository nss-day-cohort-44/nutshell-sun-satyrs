// Author: Will
// Purpose: Renders search bar used to add friends

import { useUsers } from "../users/UserDataProvider.js"
import { saveFriend } from "../friends/FriendDataProvider.js"

const contentTarget = document.querySelector(".container--right")
const eventHub = document.querySelector(".container")

export const renderSearchBar = () => {
    contentTarget.innerHTML = `
    <h2>Add a friend</h2>
    <input type="search" id="friend__searchBar">
    <button id="friend__addButton">Add</button>  
    `
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "friend__addButton") {
        const newFriendUserName = document.querySelector("#friend__searchBar").value
        databaseFriendCheck(newFriendUserName)
    }
})

const databaseFriendCheck = (input) => {
    const userId = parseInt(sessionStorage.getItem("activeUser"))
    const users = useUsers()
    const userFriendId = users.find(friend => friend.username === input)

    if (userFriendId) {
        const newFriend = {
            userId,
            userFriendId: userFriendId.id
        }

        saveFriend(newFriend)
    } else {
        window.alert("User doesn't exist!  😭")
    }
}