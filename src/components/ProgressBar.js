import React from 'react'
import PropTypes from "prop-types";
import Styled from "styled-components";



const Container = Styled.div`

progress[value] {
  /* Reset the default appearance */
  -webkit-appearance: none;
   appearance: none;
  width: 600px;
  height: 30px;

@media (max-width: 70em) {
    width: 500px;
  height: 30px;
}


@media (max-width: 48em) {
    width: 400px;
  height: 30px;
}

@media (max-width: 30em) {
    width: 300px;
  height: 30px;
}
}

progress[value]::-webkit-progress-bar {
  background-color: #eee;
  border-radius: 2px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
}

progress[value]::-webkit-progress-value {
  background-image:
	   -webkit-linear-gradient(-45deg, 
	                           transparent 33%, rgba(0, 0, 0, .1) 33%, 
	                           rgba(0,0, 0, .1) 66%, transparent 66%),
	   -webkit-linear-gradient(top, 
	                           rgba(255, 255, 255, .25), 
	                           rgba(0, 0, 0, .25)),
	   /* -webkit-linear-gradient(left, #02c, #244); */

    border-radius: 2px; 
    background-size: 35px 20px, 100% 100%, 100% 100%;


    
}

`;




const ProgressBar = ({ value, max, color, width,  }) => {
  return (

    <Container color={color} width={width}>
    <progress value={value} max={max} />
    <h3>{(value / max) * 100}%</h3>
  </Container>


  )
}

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    color: PropTypes.string,
    width: PropTypes.string
  };
  
  ProgressBar.defaultProps = {
    max: 100,
    color: "lightBlue",
    width: "250px"
  };
  

export default ProgressBar