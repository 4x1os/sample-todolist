import { add } from "date-fns";
import Note from "./note";
import './styles.css'
const tb = []
var context
const div = document.querySelector(".notes")

const addNote = document.querySelector(".addButton")
const form = document.querySelector("dialog#noteadder")
addNote.addEventListener("click", ()=>{
    form.show()
})

const exitButton = form.querySelector("#exit")
exitButton.addEventListener("click", ()=>{
    form.querySelector("input#title").textContent = ""
    form.querySelector("input#description").textContent = ""
    form.close()
})
const submitButton = form.querySelector("#submit")
submitButton.addEventListener("click", (event)=>{
    event.preventDefault();
    const title = document.getElementById("title")
    const description = document.getElementById("description")
    console.log(title.value)
    console.log(description.value)
    const builtNote = new Note(title.value, description.value, "JJ")
    div.append(builtNote.object)
    tb.push(builtNote)
    title.value = ""
    description.value = ""
    form.close()
})