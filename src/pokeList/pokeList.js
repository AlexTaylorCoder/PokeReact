import PokeContainer from "./pokeContainer";
import React, {useState,useEffect} from "react";
import {Row} from 'react-bootstrap'


const initialUrl = "https://pokeapi.co/api/v2/pokemon/?limit=10"


function PokeList({setPokeState, pokeState}) {

    useEffect(()=> {
      fetch(initialUrl).then(resp=>resp.json())
      .then(handlePokeData)
    },[])

    function handlePokeData(pokeData) {
        setPokeState(pokeData.results)
    
      }
    const pokeArr = pokeState.map((poke,index)=> <PokeContainer name = {poke.name} url={poke.url}key={index}/>)
        

    return (
        <div id = "pokeList">
        <Row xs = {6}>
            {pokeArr}
        </Row>
        </div>
    );
}

export default PokeList