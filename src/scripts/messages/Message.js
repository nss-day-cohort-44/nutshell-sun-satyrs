/*
Author: Travis Stevenson
Purpose: This module is responsible for creating an HTML representation of a single messageObj.
*/

export const Message = (messageObj) => {
    return `
        <section class="message" id="${messageObj.id}">
            <div class"message__content">To: ${messageObj.userId} - ${messageObj.message} ${messageObj.timestamp}</div>
        </section>
        `
}