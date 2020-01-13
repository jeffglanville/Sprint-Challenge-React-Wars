import React from 'react'
import Character from '../Character/Character';

function Card(props) {
    return (
        <h1>
            Character
                <p>{props.Character.name}{props.Character.birth_year}</p>
        </h1>
    )
}


export default Card;