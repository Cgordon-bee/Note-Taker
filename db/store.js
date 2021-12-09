const util = require ("util")
const fs = require ('fs')
const uuid = require ("uuid")


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store{
    getNotes(){
        return readFileAsync('db/db.json', 'utf8').then(notes => {
            let parseNotes;
            try {
              parseNotes =[].concat(JSON.parse(notes))
            } catch (error) {
            parseNotes=[]
            }
            return parseNotes
        })

    }

    addNote(note){
        const{title, text }= note
        if (!title||!text) {
           throw new Error('notes cannot be blank')
        }
        const newNote = { id:uuid(),title, text}
       
        return this.getNotes()
        .then(notes => [...notes, newNote])
        .then(updatedNotes => writeFileAsync('db/db.json', JSON.stringify(updatedNotes)))
        .then(()=> newNote)

}
}

