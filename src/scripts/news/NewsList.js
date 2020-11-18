//Author Sanjeet Prasad


import {getNews, useNews, deleteNews} from "./NewsDataProvider.js"
import {NewsCard} from "./NewsHTMLCard.js"

const newsContainer = document.querySelector(".newsDisplayContainer");
const eventHub = document.querySelector(".container")

//listning the newsStateChanged created in NewsDataProvider.js
eventHub.addEventListener("newsStateChanged", () => NewsList())

//making and exporting the NewsList function to get all the news from getNews and render to the dom.
export const NewsList = () => {
    getNews()
    .then(() => {
    const allNews = useNews()
    
    render(allNews)

    })
}
// making the render function to ender the each NewsCard
const render = (newsArray) => {
    let newsHTMLRepresentations = ""
    for (const news of newsArray) {
        

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

