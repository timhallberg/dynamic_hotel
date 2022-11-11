import React from 'react';

// import { useParams } from 'react-router-dom';

import './App.css';
import Hero from "./Hero"

import { Route, Routes } from 'react-router-dom';
import FullCard from './FullCard';
import NextCard from './NextCard';

function App() {

const data = [
  {
    title: "HTML",
    description: "This is HTML",
    nextCardinfo: "only on next card 1"
  },
  {
    title: "CSS",
    description: "This is CSS",
    nextCardinfo: "only on next card 2"
  },
  {
    title: "JS",
    description: "This is JS",
    nextCardinfo: "only on next card 3"
  },
  {
    title: "REACT",
    description: "This is REACT",
    nextCardinfo: "only on next card 4"
  },
  {
    title: "C#",
    description: "This is C#",
    nextCardinfo: "only on next card 5"
  },
  {
    title: "Angular",
    description: "This is Angular",
    nextCardinfo: "only on next card 6"
  }
]


  return (
    <div className="App">
     
      <Routes>
        <Route exact path="/" element={<Hero data={data}/>}></Route>
        <Route path='/cards/:title' element={<FullCard data={data}/>}></Route> 
        <Route path='/cards/nextcard/:title' element={ <NextCard data={data}/>}></Route> 

      </Routes>


    </div>
  );
}

export default App;
