import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';



class App extends Component {
  constructor (){
    super ()
    this.state = {
      name:'', weigth:null, image:''}
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
    console.log(data.data.sprites.front_default);
    this.setState({name: data.data.name,
      weight: data.data.weight, 
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
          <button type="button" onClick={this.addInfo}>Click to change Pokemon</button>
          <div className="Image">
            <img src={this.state.image} alt="Pokemon"/>
          </div>
          <h1>Name: {this.state.name}</h1>
          <h1>Weight: {this.state.weight}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
