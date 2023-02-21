import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

import Image1 from "../assets/images/Img.png"


function Search() {
  return (
    <div className='main'>
      <div className='bg-white h-screen flex justify-between flex-col max-w-md mx-auto p-5 py-20' bg="light" expand="lg">
        
      <Navbar ><Container fluid>
          
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onClick={()=>{
                  
                  console.log("holi")
                }}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
       
      </Navbar>


      <ul>
          <li key="img-carousel-1">
            <img className="m-16  pl-2   bg-white" src={Image1} alt="Info image 1" />
            <span>
              Nothing to found
            </span>
          </li>
          </ul>
      
      </div>
    </div>
  );
}

export default Search;