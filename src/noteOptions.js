import { sub } from "date-fns"
import { th, tr } from "date-fns/locale"

class NoteOptions{
    constructor(inheritor){
        this.parent = inheritor
        this.active = false
    }
    get build(){
        const optionButtons = document.createElement("div")

        const editButton = document.createElement("button")
        const deleteButton = document.createElement("button")

        const form = document.querySelector("#noteeditor")
        const submitButton = form.querySelector("#submit")
        editButton.textContent = "Edit"
        deleteButton.textContent = "Delete"
        

        editButton.addEventListener("click", () => {
            form.show()
            this.active = true
        })

        deleteButton.addEventListener("click", () => {
            console.log(this.parent)
            this.parent.remove()
        }); 

        submitButton.addEventListener("click", (event)=>{
            event.preventDefault();
            if (this.active){
                const title = form.querySelector("#title")
                const description = form.querySelector("#description")
                console.log(title.value)
                console.log(description.value)
                this.parent.querySelector("h1").textContent = title.value
                this.parent.querySelector("h2").textContent = description.value
                title.value = ""
                description.value = ""
                form.close()
                this.active = false
            }
        });

        optionButtons.append(editButton)
        optionButtons.append(deleteButton)
        return optionButtons
    }
} 

export default NoteOptions