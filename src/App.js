import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Max', age: 28 },
      {id: 2, name: 'Manu', age: 29 },
      {id: 3, name: 'Steph', age: 30 } 
    ],
    otherState: 'some other value',
    showPersons: false 
  }
  

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1) 
    this.setState({persons: persons})
  }


  nameChangeHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id 
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = e.target.value 

    const persons = [...this.state.persons]
    persons[personIndex] = person 

    this.setState({ persons: persons })
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }



  render() {
    const style = {
      backgroundColor: 'cyan',
      font: 'inherit', 
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null 

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, i) => {
            return (
              <Person 
                name={person.name} 
                age={person.age} 
                click={() => this.deletePersonHandler(i)} 
                key={person.id} 
                changed={(e) => this.nameChangeHandler(e, person.id)}/>
            )
          })}
        </div> 
      )
    }

    return (
      <div className="App">
        <h1>Hello World</h1>
        <h2>For The Night is Dark and Full of Terrors</h2>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Name</button>
        {persons} 
      </div>
    );
  }
}

export default App;
