import {getNews, useNews} from "./NewsDataProvider.js"
import {NewsCard} from "./NewsHTMLCard.js"

const newsContainer = document.querySelector(".newsDisplayContainer");
const eventHub = document.querySelector(".container")

eventHub.addEventListener("newsStateChanged", () => NewsList())


export const NewsList = () => {
    getNews()
    .then(() => {
    const allNews = useNews()
    
    render(allNews)

    })
}

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