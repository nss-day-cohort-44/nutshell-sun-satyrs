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
        });
};

export const useNews = () => {
    let sortedArray = news.slice
     sortedArray = news.sort(
        (currentNews, nextNews) =>
            Date.parse(currentNews.date) - Date.parse(nextNews.date)
    )
        return sortedArray
}

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

export const deleteNews = (newsId) => {
    return fetch(`http://localhost:8088/news/${newsId}`, {
        method: "DELETE"
    })
        .then(getNews)
        .then(dispatchStateChangeEvent)
}