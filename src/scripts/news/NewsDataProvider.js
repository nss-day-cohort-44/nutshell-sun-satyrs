// Author Sanjeet Prasad

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const newsStateChangedEvent = new CustomEvent("newsStateChanged")

    eventHub.dispatchEvent(newsStateChangedEvent)
}

let news = [];


// fetching the data from the local json server. and store in the getNews function and export this function.
export const getNews = () => {
    return fetch("http://localhost:8088/news")
        .then(response => response.json())
        .then(parsedNews => {
            news = parsedNews;
            // console.log(news)
        });
};

// using the .slice method to get the copy of the news array and export it.
export const useNews = () => {
    return news.slice();
};

export const saveNews = (news) => {
    return fetch('http://localhost:8088/news', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(news)
    })
    .then(getNews)
    .then(dispatchStateChangeEvent)
}