// Author Sanjeet Prasad

import { saveNews } from "./NewsDataProvider.js"

const contentTarget = document.querySelector(".container--right")

const eventHub = document.querySelector(".container")

//Making the Html for rendering on the dom.
const  render = () => {
    contentTarget.innerHTML = `
    <form id="articleformbox">
    <h2>News Article</h2><br>
             <label for="title">Title</label>
            <input type="text" id="news--title" placeholder="News Title">
                <br>
            <label for="synopsis">Synopsis</label>
            <textarea type="text" id="news--synopsis" cols="40" rows="5" placeholder="News Synopsis"></textarea>
                <br>
            <label for="url">URL</label>
            <input type="url"  id="news--url" placeholder="News URL">
                <br>
            <label for="date">Date</label>
            <input type="date" id="news--date">
            <br>
            <button id="saveNews">Save News</button>
    </form>
    
    `
}

// trgeting the id of saveNews button to put the eventListning.
eventHub.addEventListener("click", clickEvent =>{
    
    if(clickEvent.target.id === "saveNews") {
        const userId = parseInt(sessionStorage.getItem("activeUser"))
        const title = document.querySelector("#news--title").value
        const synopsis = document.querySelector("#news--synopsis").value
        const url = document.querySelector("#news--url").value
        const date = document.querySelector("#news--date").value
        const timestamp = Date.now()
        
        // making the new object of newNews with ES6 style.
        const newNews = {
            userId,
            title,
            synopsis,
            url,
            date,
            timestamp
        }
        saveNews(newNews)
        
        
    }

})
// exporting the NewsForm to main.js to render on the dom.
export const NewsForm = () => {
    render()
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "addNewsButton") {
        NewsForm()
    }
})