import { useState } from 'react'

const PersonForm = ({persons, setPersons}) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

    const addContact = (event) => { 
    event.preventDefault()
    const contactObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    setPersons(persons.concat(contactObject))
    setNewName('')
    setNewNumber('')
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