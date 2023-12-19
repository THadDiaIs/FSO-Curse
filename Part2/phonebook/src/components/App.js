import React, { useState } from 'react'
//import "../App.css"
import Contacts from "./Contacts.js"
import NewPerson from "./NewPerson.js"
import Input from "./Input.js"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showingFilter, setFilter] = useState("")

  let showingPersons = showingFilter
    ? persons.filter(person => person.name.toLowerCase().startsWith(showingFilter.toLowerCase()))
    : persons

  let addNewName = (e) => {
    e.preventDefault()
    if (persons.filter(person => person.name === newName).length > 0) {
      alert(`${newName} alaready exist in phonebook.`)
    } else {
      setPersons([...persons].concat({ name: newName, number: newNumber }))
      setNewName("")
      setNewNumber("")
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Input label="Filter shown with: " onInput={setFilter} value={showingFilter} />
      <h2>Add new contact</h2>
        <NewPerson onChangeName={setNewName} name={newName} onChangeNumber={setNewNumber} number={newNumber} onClick={addNewName}/>
      <h2>Numbers</h2>
      <Contacts contacts={showingPersons} />
    </div>
  )
}

export default App
