import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import {Card,Col} from 'react-bootstrap'


function PokeContainer({name="placeholder",url="placeholder"}) {
    console.log(name)
    const [imgSide, setImg] = useState({})
    const [isClicked, setClicked] = useState(false)

    useEffect(()=> {
        fetch(url).then(resp=>resp.json()).then(handlePoke)
    },[])

    function handlePoke(pokeData) {
        const sprites = pokeData.sprites
        const typesArr = pokeData.types.map(slot=>slot.type.name+" ")

        setImg({frontSrc: sprites.front_default,backSrc:sprites.back_default,types:typesArr})

        fetch(pokeData.species.url).then(resp=>resp.json()).then(getDescription)   
    }
    
    function getDescription(speciesData) {
        setImg((imgSide)=>({...imgSide, description: speciesData.flavor_text_entries[0].flavor_text}))
    }
    function handleFlip() {
        setClicked(!isClicked)
    }
    // const typesDisp = imgSide.types.map(type => <Card.Text>{type}</Card.Text>)
    return (
        <div id ="pokeContainer" onClick={handleFlip}>
        <Col variant = "dark" style={{margin:10}}>
            <Card>
                <Card.Img variant = "top" src= {isClicked ? imgSide.backSrc : imgSide.frontSrc} />
                <Card.Body>
                    <Card.Title> {name} </Card.Title>
                    <Card.Footer> {isClicked ? imgSide.description: imgSide.types}</Card.Footer>
                </Card.Body>
            </Card>
        </Col>
        </div>
    )
}

export default PokeContainer