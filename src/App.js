
import React from "react";
import "./App.css";
import Pokemoncard from "./components/pokemoncard";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemons: [],
      serchText:''
    };
  }

  componentDidMount = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=500");
    const pokemon = await data.json();
    this.setState({ pokemons: pokemon.results });
  };

  render() {
    const{ pokemons , serchText } = this.state;
    const filteredPokemon = pokemons.filter((poke)=>poke.name.toLowerCase().includes(serchText.toLowerCase()))
    return (
      <div className="app">
        <div style={{
          border: '2px solid',
          backgroundColor:'lightgreen',
          borderRadius:'2px'
          }}>
          <h1 style={{
            margin: '2px',
            alignItems:'center',
            paddingLeft:550
        }}>POKEMON_CARD</h1>
        </div>
        <div style={{
          borderRadius:'10px'
          }}>
          
        <input type='search'
         placeholder='search pokemon' 
         onChange={(e)=>
          this.setState({serchText: e.target.value},()=>console.log(this.state.serchText)
          )}
         style={{
            alignItems:'center',
            marginLeft:'600px'
        }}></input>
        </div>
        
        <div className="card-list">
          {filteredPokemon.map((pokemon, index) => (
            <div>
              <Pokemoncard
                url={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
                name={pokemon.name}
                key={index + 1}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
