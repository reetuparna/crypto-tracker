import React from 'react'
import Card from '../card/card'

import './cardContainer.css';

/**
* @author
* @function CardContainer
**/

const CardContainer = (props) => {
  return(
    <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
   )

 }

export default CardContainer