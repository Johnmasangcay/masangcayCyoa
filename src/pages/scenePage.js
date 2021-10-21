import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Navbar, NavbarBrand, NavLink, Nav, ButtonGroup } from 'react-bootstrap';
import '../App.css';
import { getData, db, getPosts, getFirstId } from "./firebase";
import { firebase } from "./firebase";
// import { useState } from 'react';
import { useHistory } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import TitlePage from '../pages/titlePage';



export default function ScenePage(){
    const history = useHistory();
    //          function that set the variable \to set the Value of the Variable
    const [isLoaded, setIsLoaded] = useState(false)
    const [index, setIndex] = useState(0)
    const [dataArr, setDataArr] = useState(getPosts())
    useEffect(() => {
        console.log(dataArr);
    }, [])
    let data;
    
    
    const getDataChoice1 = async(e) =>{ 
        if(e.target.innerText == "Play Again"){
            setIndex(dataArr[index].Result1-1)
        }else if(e.target.innerText == "Back To Title"){
            history.push("/")
        }else{
            if(dataArr[index].Choice1 == e.target.innerText){
                setIndex(dataArr[index].Result1-1)
                console.log(data)
            }else{
                setIndex(dataArr[index].Result2-1 ) 
                console.log(data)
            }
        }
        console.log(dataArr)
       }
       

    return(
        <div className="scenePageBg">
            <Button className="mainPageBtn" onClick={() => history.push("/")} variant="link">Main Page</Button>
        <Container>
            <Row>
                <Col className="sceneStyle d-flex justify-content-center pt-3">
                <p className="storyScenePage fadeIn">{dataArr[index].Scenes}</p>
                </Col>
            </Row>
            <Row className="btn1">
                <Col md={6}>
                <a onClick={getDataChoice1} className="btnScenePage pulse" variant="outline-danger"><span></span>{dataArr[index].Choice1}<span></span></a>
                </Col>
                <Col className="btn2" md={6}>
                <a onClick={getDataChoice1} className="btnScenePage pulse" variant="outline-danger"><span></span>{dataArr[index].Choice2}<span></span></a>
                </Col>
            </Row>
        </Container>
        
        </div>
    )
}