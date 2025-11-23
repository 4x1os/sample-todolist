import NoteOptions from "./noteOptions";

function makeObject(title, description, notes, subnotes){
    const divNote = document.createElement("div")
    const titleObj = document.createElement("h1")
    titleObj.textContent = title
    const descriptionObj = document.createElement("h2")
    descriptionObj.textContent = description
    const notesObj = document.createElement("p")
    notesObj.textContent = notes
    if (subnotes.length > 0){
        const subnotesObj = document.createElement("div")
        subnotes.array.forEach(element => {
            subnotesObj.append(element.elementObject())
        });
    }   
    
    const options = new NoteOptions(divNote)
    divNote.append(options.build)
    
    divNote.append(titleObj)
    divNote.append(descriptionObj)
    divNote.append(notesObj)
    return divNote
}

class Note {
    constructor(title, description, notes){
        this.title = title;
        this.description = description;
        this.notes = notes;
        this.subnotes = {}
        this.object = makeObject(title, description, notes, this.subnotes)
    }
}

export default Note