import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import UserOutput from './User/UserOutput'
import UserInput from './User/UserInput'

class App extends Component {
  state = {
    persons: [
      {name: 'Lucas', age: '26'},
      {name: 'Jhonathan', age: '24'}
    ]
  }
  
  switchNameHandler = (newName) => {
    //console.log('was clicked');
    this.setState({
      persons: [
        {name: newName, age: '27'},
        {name: 'Jhonathan', age: '24'}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Lucas', age: '26'},
        {name: event.target.value, age: '24'}
      ]
    })
  }

  writeName = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: '26'},
        {name: 'Jhonathan', age: '24'}
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style = {style}
          onClick = {() => this.switchNameHandler("Luke")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>
            
            My hobbies: Playing

        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Lucas!!!")}
          changed = {this.nameChangedHandler}>
          
            My hobbies: Sleeping
            
        </Person>
        <UserInput 
        change={this.writeName}
        name={this.state.persons[0].name}/>
        <UserOutput userName = {this.state.persons[0].name} />
      </div>
    );
  }
}

export default App;
