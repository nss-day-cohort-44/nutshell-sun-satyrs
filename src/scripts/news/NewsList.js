//Author Sanjeet Prasad

import {useUsers, getUsers} from "../users/UserDataProvider.js"
import {getNews, useNews, deleteNews} from "./NewsDataProvider.js"
import {NewsCard} from "./NewsHTMLCard.js"

const newsContainer = document.querySelector("#newsDisplayContainer");
const eventHub = document.querySelector(".container")

//listning the newsStateChanged created in NewsDataProvider.js
eventHub.addEventListener("newsStateChanged", () => NewsList())

let users = []
let news = []
//making and exporting the NewsList function to get all the news from getNews and render to the dom.
export const NewsList = () => {
    getNews()
    .then(getUsers)
    .then(() => {
     news = useNews()
     users = useUsers()
    
    render()

    })
}
// making the render function to ender the each NewsCard
const render = () => {
    let newsHTMLRepresentations = ""

    const activeUserNews = news.filter(news => news.userId === parseInt(sessionStorage.getItem("activeUser")))
    for (const news of activeUserNews) {
        

        newsHTMLRepresentations += NewsCard(news)
    }
    newsContainer.innerHTML = `
    <h3>My News</h3>
    ${newsHTMLRepresentations}
    `
}

eventHub.addEventListener("click", clickEvent => {

    // console.log(clickEvent, "id?")
    if (clickEvent.target.id.startsWith("deleteNews--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

       
       deleteNews(id).then(
           () => {
               const updatedNotes = useNews()
               render(updatedNotes)
           }
       )
    }
})

