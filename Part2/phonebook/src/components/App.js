import { useState, useEffect } from 'react'
import Contacts from "./Contacts.js"
import NewPerson from "./NewPerson.js"
import Input from "./Input.js"
import axios from "axios"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showingFilter, setFilter] = useState("")

  useEffect(()=>{
    axios
      .get("http://localhost:3001/persons")
      .then((response)=>{
        setPersons(response.data)
      })
  },[])

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
