import { useState } from 'react'
import personService from '../services/persons'

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    const contactObject = {
      name: newName,
      number: newNumber
    }

    if (persons.some(person => person.name === newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const id = persons.find(p => p.name === newName).id;
        personService
          .update(id, contactObject)
          .then(returnedContact => {
            setNewName('')
            setNewNumber('')
            setPersons(persons.map(person => person.id !== id ? person : returnedContact))
          })
      }
      return
    }

    personService
      .create(contactObject)
      .then(returnedContact => {
        setPersons(persons.concat(returnedContact))
        setNewName('')
        setNewNumber('')
      })
  }

  const handleContactChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <form onSubmit={addContact}>
      <div>
        Name: <input value={newName} onChange={handleContactChange} />
      </div>
      <br />
      <div>
        Number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <br />
      <div>
        <button type="submit">Add Contact</button>
      </div>
    </form>
  );
}

export default PersonForm;