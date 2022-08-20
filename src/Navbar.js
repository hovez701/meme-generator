import React from 'react';
import logo from './logo.svg'
import './Navbar.css'

function Navbar(props ){
    function toggle(){
        props.setDarkMode(prevMode => !prevMode)
        console.log(props.darkMode);
    }

    return (
        <header className={props.darkMode ? "App-header dark" : "App-header light"}>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            test <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
            <label className="switch">
                <input onChange={toggle} type="checkbox"className={props.darkMode ? "input checked" : "input"}/>
                <span className="slider round"></span>
            </label>
        </header>
    )
}

export default Navbar