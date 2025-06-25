import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filterNames, setFilterNames] = useState('')

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filterNames.toLowerCase())
  )

  const hook = () => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }

  useEffect(hook, [])

  const eraseContact = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .erase(person.id)
        .then(returnedContact => {
          setPersons(persons.filter(n => n.id !== returnedContact.id))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterNames={filterNames} setFilterNames={setFilterNames} />
      <h2>Add a new contact</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <div>
        <ul>
          {filteredPersons.map((person, i) =>
            <Person
              key={i}
              person={person}
              deleteContact={() => eraseContact(person)} />
          )}
        </ul>
      </div>
    </div>
  )
}

export default App