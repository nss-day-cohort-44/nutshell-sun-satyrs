console.log("you rock")

import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"
import { NewsForm } from "./news/NewsForm.js"
import { NewsList } from "./news/NewsList.js"


NewsForm()
NewsList()
import { getTasks, useTasks } from "./tasks/TaskDataProvider.js"


import { getUsers } from "./users/UserDataProvider.js"
import { getEvents} from "./events/EventDataProvider.js"
import { EventList } from "./events/EventList.js"

import { deleteMessage, getMessages, useMessages } from "./messages/MessageDataProvider.js"


/*
1. Check if the user is authenticated by looking in session storage for `activeUser`
2. If so, render the Nutshell component
3. If not, render the login and registration forms
4. Also, if the user authenticates, and the login form is initially shown
ensure that the Nutshell component gets rendered
*/
// LoginForm()
// RegisterForm()
// Nutshell()

getUsers()
getEvents()



EventList()

getMessages()
// LoginForm()
if (!sessionStorage.length) {
    LoginForm()
    RegisterForm()
}
else {
    Nutshell()
}
getTasks()

