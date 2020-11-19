// Author: Will
// Purpose: Responsible for rendering the list of friends to the dom for the active user

import { FriendAsHTML } from "./Friend.js"
import { useUsers, getUsers } from "../users/UserDataProvider.js"
import { useFriends, getFriends } from "./FriendDataProvider.js"


const eventHub = document.querySelector(".container")
const contentElement = document.querySelector("#friends")

eventHub.addEventListener("friendStateChanged", () => FriendList())

// empty arrays for users and friends
let users = []
let friends = []

// responsible for filling arrays with users and friends and calling render
export const FriendList = () => {
    getUsers()
    .then(getFriends)
    .then(() => {
        users = useUsers()
        friends = useFriends()

        render()
    })
}

// responsible for filtering friends for current user and rendering
const render = () => {
    let friendHTMLRep = ""

    const activeUserFriendRelationships = friends.filter(friend => friend.userId === parseInt(sessionStorage.getItem("activeUser")))

        activeUserFriendRelationships.forEach(rel => {
        const matchedUser = users.find(user => user.id === rel.userFriendId)
        friendHTMLRep += FriendAsHTML(matchedUser, rel)
    })

    contentElement.innerHTML = `
        <h3>Friends</h3>
        <button id="addFriend">Add Friend</button>
        ${friendHTMLRep}
    `
}
