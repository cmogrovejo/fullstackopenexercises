import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons) 
  const [filterNames, setFilterNames] = useState('')

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filterNames.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterNames={filterNames} setFilterNames={setFilterNames} />
      <h2>Add a new contact</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App