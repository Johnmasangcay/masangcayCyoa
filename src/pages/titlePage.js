import React, { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Navbar, NavbarBrand, NavLink, Nav, Modal } from 'react-bootstrap';
import OptionPage from "./optionPage";
import { useHistory } from "react-router-dom";
import { getData, db } from "./firebase";
// import { Animated } from "react-animated-css";
import '../styles/wickedcss.min.css';


export default function TitlePage(){

    const history = useHistory();
    const toScenePage = () =>{
        console.log(history)
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAlert = () =>{
        alert=("You've Join The Club")
    }

    

    return(
        <>
        
        <Container>

            {/* <img src={} alt="" /> */}
            <div md={4} className="title ">
            <h1 className="py-5 textSize bounceIn">Running DEAD</h1> 
            </div>
           
       
        </Container>
        
        <Container>
            <Row className="titleBtn">
                <Col>
               <Button className="titleBtn pulse" variant="link" onClick={() => history.push("/scenePage")} >Start</Button> 
                </Col>
            </Row>
            <Row className="titleBtn py-3">
                <Col>
               <Button className="titleBtn pulse" variant="link"  onClick={() => history.push("/optionPage")}>Option</Button>
                </Col>
            </Row>             
            <Row className="titleBtn py-1">
                <Col>
               <Button className="titleBtn pulse" variant="link"  onClick={handleShow}>Credits</Button>
                </Col>
            </Row> 

            <Modal show={show} onHide={handleClose}
                  size="md"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                 >
                    <Modal.Header closeButton>
                      <Modal.Title className="modalTitle">Credits</Modal.Title>
                    </Modal.Header>
                    <Modal.Body  className="creditStyle">
                        <p>With GAME Credits, all your metaverse assets are blockchain 
                    items, so you can own and sell them at your discretion. No 
                    blockchain experience required – we handle all the tricky stuff 
                    so you can just buy, sell and trade while you’re having fun.</p>
                    

                    Join our community to participate in designing game mechanics,
                     strategy and lore for the Metaverse. You can participate in 
                     decisions around rules and rewards and earn GAME for your 
                     contributions to the community.
                        </Modal.Body>
                    <Modal.Footer>
                      
                      <Button variant="dark" type="submit" onClick={ () => alert("You've Join The Club")}>JOIN OUR COMMUNITY </Button>
                      <Button variant="secondary"  onClick={handleClose}>Cancel </Button>
                    </Modal.Footer>
                </Modal>            
        </Container>

                <footer>
                <div>
                <h5 className="creditTxtSize">@CAPCOM CO. LTD . 2021,2022 CODESTACK ACADEMY.</h5>
                </div>
                </footer>
        

 
        </>
    )
}