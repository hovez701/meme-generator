import './App.css';
import Content from './Content.js';
import Navbar from './Navbar.js';
import Card from './Card.js'
import Header from './Header.js'
import Form from './Form.js'
import React from 'react';

function App() {
  const [darkMode, setDarkMode] =React.useState(false);

  

  return (
    <div className="container">
      <Navbar 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        />
      <Content 
      darkMode={darkMode}
      setDarkMode={setDarkMode}

      />
      <div className="card-container">
        <Card 
          img="./house.png"
          location="Villenauxe-la-Grande, France"
          score="4.0"
          host = "Professional Host"
          availability="29 Aug - 3 Sept"
          cost = "£1138 total"
        />
        <Card 
          img="./house-2.png"
          location="London"
          score="3.0"
          host = "Individual Host"
          availability="29 Aug - 3 Sept"
          cost = "£800 total"
        />
        <Card 
          img="./house-3.png"
          location="Sydney, Australia"
          score="4.4"
          host = "Professional Host"
          availability="31 Dec - 12 Jan"
          cost = "£1309 total"
        />
      </div>

      <Header />
      <Form />
    </div>
  );
}

export default App;
