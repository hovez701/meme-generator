import './App.css';
import Header from './Header.js'
import Form from './Form.js'
import React from 'react';
import Memegrid from './Memegrid.js'

function App() {
  const [memeGrid, setMemeGrid] = React.useState(getLocalStorage());

  function getLocalStorage()
{
  const data = JSON.parse(localStorage.getItem('memes'));
  if(!data)
    return [];

  return data
}  

  return (
    <div className="container">
      <Header />
      <Form 
      memeGrid = {memeGrid}
      setMemeGrid = {setMemeGrid}
      />
      <Memegrid
      memeGrid = {memeGrid}
      setMemeGrid = {setMemeGrid}
      />
    </div>
  );
}

export default App;
