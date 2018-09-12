import React from 'react'
import Person from './Person/Person'

const Persons = (props) => (
  props.persons.map((person, i) => {
    return (
      <Person 
        name={person.name} 
        age={person.age} 
        key={person.id}
        click={() => props.clicked(i)} 
        changed={(e) => props.changed(e, person.id)}/>
    )
  })
)

export default Persons