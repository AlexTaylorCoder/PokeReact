import Dropdown from './Dropdown'
import Search from './Search'
import Title from './Title'
import About from './About'
import {Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import pokeBanner from "../Media/pokeBanner.jpg"


function Header({setTextInput}) {
    return (
        <div id = "header">
        <img src={pokeBanner} />
        <Row>
        <Col><About/></Col>
        <Col><Title/></Col>    
        <Col><Dropdown/></Col>   
        <Col><Search setTextInput = {setTextInput}/></Col>
        
        </Row>
  
        </div>
        
    );

}

export default Header