import { getEvents, useEvents } from "./events/EventDataProvider.js"
import { EventList } from "./events/EventList.js"
import { NewsForm } from "./news/NewsForm.js"
import { NewsList } from "./news/NewsList.js"
import { taskButton } from './tasks/TaskButton.js'



const contentTarget = document.querySelector(".welcome")

export const Nutshell = () => {
    // Render all your UI components here
    contentTarget.innerHTML += "<h1>Welcome to Nutshell!</h1>"
    //    
   EventList()
   taskButton()
   NewsForm()
   NewsList()
}