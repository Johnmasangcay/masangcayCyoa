import React, { useState, useRef, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import TitlePage from './pages/titlePage';
import ScenePage from './pages/scenePage';
import OptionPage from './pages/optionPage';
import { Container, Row, Col, Card, Button, Navbar, NavbarBrand, NavLink, Nav, ButtonGroup } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { getData, db, getPosts, getFirstId } from "./pages/firebase";
import Sound1 from "./audio/sound1.mp3";
import Sound2 from "./audio/sound2.mp3"
// import {Animated} from "react-animated-css";
// import ResidetnEvilSound from "../audioClips"


export default function App(props) {
  const history = useHistory();


  const [playing, setPlaying] = useState(false)
  const [song, setSong] = useState(new Audio(Sound2))

  const handlePlayPause = () => {
    setPlaying(!playing);
    if (playing) {
      song.pause();
    } else {
      song.play()
    }
  }


  useEffect(() => {
    getData();
}, [])

  return (
    <>
    
    <Router>   
                <Switch>
                    <Route exact path="/scenePage">
                          <ScenePage />
                    </Route>
                    <Route exact path="/optionPage">
                        <OptionPage handlePlayPause={handlePlayPause}/>
                    </Route> 
                      <Route exact path="/">
                      <TitlePage/>
                  </Route>                 
                </Switch>
    </Router>

    </>
  );
}



