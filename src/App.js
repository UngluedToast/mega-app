import React from 'react';
import './App.css';
import Got from './got'
import Joke from './jokes'
import Fortune from './fortune'
import Weather from './weather'

function App() {
    return (
      <div className='GOT'>
        <Got /> 
        ---------------------------------------------
        <Joke />
        ---------------------------------------------
        <Fortune />
        ---------------------------------------------
        <Weather />
      </div>

    )
  };

export default App;
