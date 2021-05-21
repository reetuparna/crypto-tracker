import React from 'react'
import { useSelector } from 'react-redux';
import Card from '../card/card'

import './cardContainer.css';

/**
* @author
* @function CardContainer
**/

const CardContainer = (props) => {

  const coins = useSelector(state => state.coins);
  const top4 = coins.filter(coin => coin.market_cap_rank<=4);
  
  return(
    
    <div className="card-container">
      {top4.map(topCard => {
        return <Card 
          name={topCard.name}
          symbol={topCard.symbol}
          current_price={topCard.current_price}
          price_change_percentage_24h={topCard.price_change_percentage_24h}
          image={topCard.image}
        />;
      })}
    </div>
   )

 }

export default CardContainer