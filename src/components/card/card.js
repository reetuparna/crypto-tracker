
import React from 'react'
import { useSelector } from 'react-redux';
import './card.css';

/**
* @author
* @function Card
**/

const Card = ({symbol,name, image, current_price, price_change_percentage_24h}) => {

  const currency = useSelector(state =>  state.currency);

  return(
    <div className="card">
      
      <div className="card-info">
        <div className="name-container">
          {/* <div> {symbol}</div> */}
          <div>{name}</div>
          <img src={image} className="symbol"/>
        </div>
        <div className="price">{current_price}</div>
        <div className={price_change_percentage_24h>=0 ? 'delta-positive' : 'delta-negative' }>
          {price_change_percentage_24h}%
        </div>
      </div>

      <div className="card-graph">
      </div>

    </div>
   )

 }

export default Card