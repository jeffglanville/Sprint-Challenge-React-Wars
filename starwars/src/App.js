import React, {useState, useEffect} from 'react';
import './App.css';
import Card from './components/Card/Card';
import Character from './components/Character/Character';
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);

useEffect(() => {
  axios
    .get("https://swapi.co/api/people/1/")
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
}, []);

  return (
    <div className="App">
      <Card/>
      <Character data = {data}/>
    </div>
  );
}

export default App;



 // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.