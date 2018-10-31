import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Lucas', age: '26'},
      {name: 'Jhonathan', age: '24'}
    ]
  }
  
  switchNameHandler = () => {
    //console.log('was clicked');
    this.setState({
      persons: [
        {name: 'Lucasss', age: '27'},
        {name: 'Jhonathan', age: '24'}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick = {this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies: Playing</Person>
      </div>
    );
  }
}

export default App;
