
import Navbar from "react-bootstrap/Navbar" 
import Nav from "react-bootstrap/Nav"  
import NavDropdown from "react-bootstrap/NavDropdown" 

import "./NavBar.css" 



const NabVar=()=>{
    return(
      <Navbar>
      <Navbar.Brand className="navbar" href="">EsLaPerchaShowroom</Navbar.Brand>
      
     
        <Nav className="mr-auto">
          
          
            <NavDropdown.Item href="#action3">Inicio</NavDropdown.Item>

            <NavDropdown.Item href="#action4">Indumentaria</NavDropdown.Item>
            
            <NavDropdown.Item href="#action5">Contacto</NavDropdown.Item>
            
          
          
        </Nav>
        
      
    </Navbar>

    
    )

}
export default NabVar
