import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 25vh;
`

const Char = styled.div`
    display: flex;
    justify-content: center;
    margin: 5px;
    width: 95%;
    height: 10vh;
    background-color: #DAD6D6;
    box-shadow: 2.5px 2.5px;
    border: 2px solid red;
`

const Para = styled.p`
    justify-content: space-evenly;
    font-size: 1.25rem;
    margin: 10px;
    color: crimson;
`

function Card(props) {
  console.log(props);
    return (
      <Container>
          <Char>
            <Para>Name:  {props.value && props.value.name}</Para>
            <Para>Height: {props.value && props.value.height}</Para>
            <Para>Mass: {props.value && props.value.mass}</Para>
            <Para>Hair Color: {props.value && props.value.hair_color}</Para>
            <Para>Skin Color: {props.value && props.value.skin_color}</Para>
            <Para>Eye Color: {props.value && props.value.eye_color}</Para>
            <Para>Birth Year: {props.value && props.value.birth_year}</Para>
            <Para>Gender: {props.value && props.value.gender}</Para>
        </Char>
      </Container>
    );
  }

export default Card;
