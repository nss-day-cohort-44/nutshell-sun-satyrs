export const NewsCard = newsObj => {
    return `
        <div class="newsCard">
            <h3>Title: ${newsObj.title}</h3>
            <p>Synopsis: ${newsObj.synopsis}</p> 
            <p>URL: <a href="${newsObj.url}">${newsObj.url}</a></p> 
            <p>Date of News: ${newsObj.date}</p>
            <p>Time Note Entered: ${new Date(newsObj.timestamp).toLocaleDateString('en-US')}</p> 
            <button id="deleteNews--${newsObj.id}">Delete</button>
        </div>
    `;
};