import './App.css';
import React, {Component} from 'react';
import {Cardlist} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();

    this.state = {
      searchField: '',
      roboset: 1,
      naam: 'Mariel',
      monsters: []

    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
      placeholder = 'Search Monsters'
      handleChange={e => this.setState({searchField: e.target.value})}
      />
      <Cardlist monsters = {filteredMonsters} roboset = {this.state.roboset}/>
      
        <h1>{this.state.naam}</h1>

        <button onClick={() => this.setState({naam: 'Marco'})}> Change Name</button>
        <button onClick={() => this.setState({naam: 'Mariel'})}> Change Back</button>
        <button onClick={() => this.setState({roboset: this.state.roboset+1})}> Change Monsters</button>
    </div>
  );
};

}
export default App;
