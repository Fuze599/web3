import axios from 'axios'
import { useState, useEffect } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 

  useEffect(() => {
      axios.get("http://localhost:3001/persons")
      .then(response => {        
        setPersons(response.data)      
      })
  }, [])


  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const addNumberHandler = (e) => {
    e.preventDefault()
    if (persons.find(p => p.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    let id = 1
    if (persons.length > 0) id = persons.at(-1).id + 1
    const person = { name: newName, number: newNumber, id: id }
    axios.post("http://localhost:3001/persons", person)
      .then(response => setPersons(persons.concat(response.data)))
  }

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumberHandler}>
        <div>
          name: <input onChange={handleNewName} />
          <br/>
          number: <input onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
			{persons.map(person => 
			  <li key={person.id}>{person.name} {person.number}</li>
			)}
		  </ul>
    </div>
  )
}

export default App