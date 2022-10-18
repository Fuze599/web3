import { useState, useEffect } from 'react'
import Filter from 'Filter/Filter'
import PersonForm from 'PersonForm/PersonForm'
import Persons from 'Persons/Persons'

import personService from 'Services/Persons'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personService
      .getAll()
      .then(allPerson => {
        setPersons(allPerson)
        setPersonsFiltred(allPerson)
      })
      .catch(() => {
        alert("Error retrieve persons")
      })
  }, [])  

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personsFiltred, setPersonsFiltred] = useState([])

  const handleNameChange = (e) => {    
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    setPersonsFiltred(persons.filter(p => p.name.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  const handleAddPerson = e => {    
    e.preventDefault() 

    const newPerson = {name: newName, number: newNumber, id: persons.at(-1).id + 1}
    const oldPerson = persons.find(p => p['name'] === newName)

    if (oldPerson && window.confirm("Are you sure ?")) {
      const updatedPerson = { ...newPerson, id: oldPerson.id }
      personService
        .updateOne(updatedPerson.id, updatedPerson)
        .then(updatedOne => {
          const newPersonTable = persons.filter(p => p.id !== updatedOne.id).concat(updatedOne)
          setPersons(newPersonTable)
          setPersonsFiltred(newPersonTable)
        })
        .catch(() => {
          alert("aled")
        })
    } else {
      personService
        .createOne(newPerson)
        .then(createdOne => {
          const newPersonTable = persons.concat(createdOne)
          setPersons(newPersonTable)
          setPersonsFiltred(newPersonTable)
        })
        .catch(() => {
          alert("aled")
        })
    }
  }

  const handleDeletePerson = e => {
    e.preventDefault();
    if (!window.confirm("Are you sure ?")) return
    const id = parseInt(e.target.value)
    personService
      .deleteOne(id)
      .then(() => {
        const newPersonTable = persons.filter(p => p.id !== id)
        setPersons(newPersonTable)
        setPersonsFiltred(newPersonTable)
      })
      .catch(() => {
        alert("Not found")
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter onChange={handleFilterChange} />

      <h3>Add a new</h3>

      <PersonForm onSubmit={handleAddPerson} onNameChange={handleNameChange} onNumberChange={handleNumberChange} />

      <h3>Numbers</h3>

      <Persons persons={personsFiltred} onClick={handleDeletePerson} />
    </div>
  )
}

export default App
