import React from 'react';
import logo from'./logo.svg';
import './index.css';

function Content(props){


    return (
        <div className={props.darkMode ? "content dark" : "content light"}>
          <img src={logo} alt="logo"/>
          <h1>Fun facts about React</h1>
          <ul className="content-list">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K starts on GitHub</li>
            <li>Was first released in 2013</li>
          </ul>
        </div>
      ) 
    
}

export default Content