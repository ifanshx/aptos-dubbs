
import React from 'react'
import styled, { keyframes } from "styled-components";


const Input = styled.input`
    background-color: azure;
  border-radius: 45px;
  width: 15vw;
  text-align: center;
  height: 7vh;
`;

const Search = ({ searchChange , update }) => {
  return (

    <Input 
        // type="Search" 
        placeholder="Search for ROBO GODS" 
        onChange={update}    
    />

  )
}

export default Search