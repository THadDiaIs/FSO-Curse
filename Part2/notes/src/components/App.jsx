import { useState, useEffect} from 'react'
import Note from './Note'
import noteService from "../services/notes"


const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('a new note ...')
    const [showAll, setShowAll] = useState(true)

    useEffect(() => {
        noteService
            .getAll()
            .then( initialNotes => setNotes(initialNotes))
    }, [])


    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important)

    const addNote = (event) => {
        event.preventDefault()

        noteService
            .create({
                content: newNote,
                date: new Date().toISOString(),
                important: Math.random() < 0.5
            })
            .then(createdNote => setNotes(notes.concat(createdNote)))
    }

    const handleNoteChange = (event) => {
        setNewNote(event.target.value)
    }

    const toggleImportanceOf = (id) => {
        const note = notes.find(n => n.id === id)
        noteService
            .update(id,
                {
                    ...note, important: !note.important
                })
            .then(updatedNote => setNotes(notes.map(note => note.id !== id ? note : updatedNote)))
            .catch(error => {
                alert(`The note '${note.content}' was alaready deleted from server`)
                setNotes(notes.filter(n => n.id !== id))
            })
    }

    return (
        <div>
        <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all' }
                </button>
            </div>
        <ul>
        {notesToShow.map(note =>
            <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
        )}
        </ul>
        <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
        </form>
        </div>
    )
}

export default App
