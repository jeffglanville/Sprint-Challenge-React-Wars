import React, {useState, useEffect} from 'react';
import axios from 'axios';


function Character(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get("https://swapi.co/api/people/")
        .then((res) => setData(res.data.results))
        .catch((err) => console.log(err));
    }, []);

    return(
        <h1>
            {data.map((name) => {
                return <Character key = {data.name}/>
            })}
        </h1>
    )
}



export default Character;