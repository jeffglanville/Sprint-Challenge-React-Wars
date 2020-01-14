import React from 'react';
import Card from '../Card/Card';


function Character(props) {

    return(
        <h1>
            Character Info:
            {props.data.map((name) => {
                return <Card key = {props.data.name} value = {name}/>
            })}
        </h1>
    )
}



export default Character;