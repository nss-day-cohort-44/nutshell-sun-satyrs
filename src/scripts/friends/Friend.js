// Author: Will
// Purpose: Responsible for HTML for individual friend

export const FriendAsHTML = (friend) => {
    return `
        <section class="friend" id="friend.id">
            <h3>${friend.username}</h3>
            <button id="deleteFriend">Unfollow</button>
        </section>
    `
}