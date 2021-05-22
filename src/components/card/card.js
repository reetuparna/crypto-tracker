
import React , { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import LineChart from '../chart/linechart';
import './card.css';

/**
* @author
* @function Card
**/

const Card = ({id, name, image, current_price, price_change_percentage_24h}) => {

  const currency = useSelector(state =>  state.currency);
  const cardData = useSelector(state => state.cardData.find(obj => obj.id==id));

  const dispatch = useDispatch();

  useEffect(() => {
      axios
          .get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=7&interval=daily`)
          .then(res => {
              
              dispatch(
                {
                    type:"SPARKLINE_UPDATED", 
                    value: {
                      id: id,
                      data_7d: res.data,
                    }
                })
          })
          .catch(error => console.log(error))
  }, [currency, id]);

  
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
        {cardData!=undefined?<LineChart sparkline={cardData}/>:<p></p>}
      </div>

    </div>
   )

 }

export default Card