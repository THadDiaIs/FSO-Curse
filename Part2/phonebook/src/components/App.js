import { useState, useEffect } from 'react'
import Contacts from "./Contacts.js"
import NewPerson from "./NewPerson.js"
import Input from "./Input.js"
import personsService from "../services/personsService"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [showingFilter, setFilter] = useState("")

  useEffect(()=>{
    personsService.getAll()
      .then(personsList => setPersons(personsList))
      .catch(error => alert('Error we can retrive data from server'))
  },[])

  let resetInputs = () => {
    setNewName("")
    setNewNumber("")
  }

  let showingPersons = showingFilter
    ? persons.filter(person => person.name.toLowerCase().startsWith(showingFilter.toLowerCase()))
    : persons

  let addNewName = (e) => {
    e.preventDefault()
    let toUpdate = persons.filter(person => person.name === newName)
    if (toUpdate.length > 0) {
      toUpdate = {...toUpdate[0], number: newNumber}
      if (window.confirm(`${newName} alaready exist on phonebook,
        replace the old number with a new one?`)){
        personsService.updatePerson(toUpdate)
          .then(updated => setPersons(persons.filter(prsn => prsn.id != updated.id).concat(updated)))
          .catch(error => alert("Cant update."))
        resetInputs()
      }
    } else {
      personsService.createNew({ name: newName, number: newNumber })
        .then(created => setPersons([...persons].concat(created)))
        .catch(error => alert(`${newName} cannot be saved, try again later`))
      resetInputs()
    }
  }

  let deletePerson = (idToDelete) => {
    let deleting = persons.filter(prsn => prsn.id == idToDelete)[0]
    if (window.confirm(`Sure to delete ${deleting.name}?.`)){
      personsService.deletePerson(idToDelete)
        .then(deleted => setPersons(persons.filter(prsn => prsn.id != idToDelete)))
      }
    }

  return (
    <div>
      <h2>Phonebook</h2>
        <Input label="Filter shown with: " onInput={setFilter} value={showingFilter} />
      <h2>Add new contact</h2>
        <NewPerson onChangeName={setNewName} name={newName} onChangeNumber={setNewNumber} number={newNumber} onClick={addNewName}/>
      <h2>Numbers</h2>
      <Contacts contacts={showingPersons} deletePerson={deletePerson} />
    </div>
  )
}

export default App
