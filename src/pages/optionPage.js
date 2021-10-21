import React, { useState, useEffect, useRef } from "react";
import '../App.css';
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import TitlePage from "./titlePage";
import { Container, Row, Col, Card, Button, Navbar, NavbarBrand, NavLink, Nav, ButtonGroup } from 'react-bootstrap';
import Sound1 from "../audio/sound1.mp3"
import Sound2 from "../audio/sound2.mp3"
import PausePlayBtn from "../images/pause-play (2).png"
import ReactAudioPlayer from 'react-audio-player';

 

export default function OptionPage(props){
    let audioRef = useRef(new Audio(Sound2))
    const history = useHistory()
    // let audio = audioRef.current
    // const [song, setSong] = useState(new Audio(Sound2))
  



    // useEffect(() => {
    //     isPlaying ? song.play() : song.pause()
    // }, [isPlaying])
       
    return(       
        <div className="optionPageBg">
            {/* <audio ref={audioRef} src={Sound2} ></audio> */}
            
        <Button className="mainPageBtn" onClick={() => history.push("/")} variant="link">Main Page</Button>
        <Container>
            <Row className="mediaVol">
                <Col>
                <h3>Media Volume</h3>
                </Col>
            </Row>
            <Row className="mediaVolBtn">
                <Col>
                <ButtonGroup aria-label="Basic example">
                    <div className="playPauseBtnPositioning">
                    <button className="playPauseBtn pulse" onClick={props.handlePlayPause}>PLAY/PAUSE</button>
                    </div>
                    
                     
                </ButtonGroup>
                </Col>
            </Row>

          
        </Container>
        </div>
    )
}