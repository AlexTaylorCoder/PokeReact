import './App.css';
import Header from './Header/Header'
import PokeList from './pokeList/pokeList';
import Footer from './Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

function App() {
  const [textInput, setTextInput] = useState("")
  const [pokeDisplay, pokeDisplaySet] = useState([])
  const [currPoke, setCurrPoke] = useState([])


  function getPoke(returned) {    
    pokeDisplaySet(returned)
    setCurrPoke(returned)
  }
  function getText(returned) {
      setTextInput(returned)
      const displayed = pokeDisplay.filter(poke=> poke.name.slice(0,returned.length).toLowerCase().trim()===returned.toLowerCase().trim())
      setCurrPoke(displayed)
 
  }
  return (
    <div className="App">
      <Header setTextInput = {getText}/>
      <PokeList pokeState = {currPoke} setPokeState={getPoke}/>
      <Footer />
    </div>
  );
}

export default App;
