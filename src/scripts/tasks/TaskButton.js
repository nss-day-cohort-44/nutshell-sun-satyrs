// get a ref to the landing spot in index.html for the witnesses button
const buttonTarget = document.querySelector("#tasks")

// hang eventHub on top level container in index.html
const eventHub = document.querySelector(".container")

// render button to index.html
export const taskButton = () => {
    buttonTarget.innerHTML = `
    <button id="create-task-button">Create New Task</button>
   `
}

// listen for matching click event and create/dispatch CustomEvent: "createTaskClicked"
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "create-task-button") {
        // debug
        console.log("Create New Task button was clicked")

        // create event object 
        const createTaskButtonClicked = new CustomEvent("createTaskClicked")

        // what about detail: key/value pair

        // dispatch event object
        eventHub.dispatchEvent(createTaskButtonClicked)
    }
})
