import React from 'react';
import Card from '../Card/Card';


function Character(props) {
    return (
        <h1>
            {props.data.map((name) => {
                return <Card key = {props.Character.name}/>
            })}
        </h1>
    );
}



export default Character;