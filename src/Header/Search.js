import React, {useState} from "react"

const searchUrl = "https://pokeapi.co/api/v2/pokemon/"

function Search({setTextInput}) {
    function handleInput(e) {
        setTextInput(e.target.value)
    }
    return (
        <div id = "search">
            <input onChange = {handleInput} type= 'textfield'></input>
        </div>

    )
}

export default Search