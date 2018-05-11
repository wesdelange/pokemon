import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';



class App extends Component {
  constructor (){
    super ()
    this.state = {
      name:'', weigth:null, height:'', move:'', image:''}
}
  componentDidMount() {
    const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/1/';
  
    axios
      .get(pokemonURL)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
       console.log(err);
      });
  }
  addInfo = (event) => {
  event.preventDefault();
  let id = Math.floor (Math.random() * 100);
  //let newURL = 'https://pokeapi.co/api/v2/pokemon/' + id + '/';
  let temp = `https://pokeapi.co/api/v2/pokemon/${id}/`
  console.log(temp);

  axios.get(temp).then((data) => {
    console.log(data.data.name);
    console.log(data.data.weight);
    console.log(data.data.height);
    console.log(data.data.moves[0].move.name);
    console.log(data.data.sprites.front_default);
    this.setState({name: data.data.name,
      weight: data.data.weight,
      height: data.data.height,
      move: data.data.moves[0].move.name, 
      image: data.data.sprites.front_default})
  }).catch((err) => {
    console.log(err);
  });
  
  }
 


  render() {
    return (
      <div className="App">
        <div className="Pokedex">
          <div className="Items">
              <div className="Image">
                <img src={this.state.image} alt="Pokemon"/>
              </div>
            <h1>Special Move:<br />{this.state.move}</h1>
            <button type="button" onClick={this.addInfo}>Change Pokemon</button>
          </div>
          <div className="Stats">
            <h1>Name: {this.state.name}</h1>
            <h1>Weight: {this.state.weight}</h1>
            <h1>Height: {this.state.height}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
