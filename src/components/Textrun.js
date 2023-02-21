import React from 'react'
import styled from 'styled-components'


const Main = styled.div`
  height: 35px;
  width: 100%;
 
  overflow: hidden;
  position: relative;
  background-color: #e9e5fb;  
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 8px 0 4px 0;
`

const Container = styled.div`
  display: inline-block;
  width: 300%;
  height: 40px;
 
  position: absolute;
  overflow: hidden;
 
  animation: marquee 12s linear infinite;

`

const Text = styled.span`
  float: left;
  width: 25%;
`


const A = styled.a`
    text-decoration: none;
    color: #000;
`

const Textrun = () => {
  return (
    <Main class="marquee">
            <Container>
                <Text><A href="#">twitter</A></Text>
                <Text><A href="#">instagram</A></Text> 
                <Text><A href="#">pinterest</A></Text>
                <Text><A href="#">spotify</A></Text> 
                <Text><A href="#">magazine</A></Text>
            </Container>
        </Main>
  )
}

export default Textrun