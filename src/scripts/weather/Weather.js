// Author: Will
// Purpose: Providing weather for each event

export const weatherHTML = () => {
    return `
        <div id="weather__high">High: 75 &#8457</div>
        <div id="weather__low">Low: 65 &#8457</div>
        <div id="weather__description">${weatherWords[randomWeather]}</div>
        `
}

const weatherWords = ["Sunny", "Cloudy", "Rainy"]

const randomWeather = Math.floor(Math.random() * weatherWords.length);