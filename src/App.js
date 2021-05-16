import React, {useState, useEffect} from 'react';
import './App.css';
import Cointable from './components/table';
import axios from 'axios';
import Header from './components/header/header';

function App() {

  const [coins, setCoins] = useState([]);

  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
           axios
          .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=30&page=1&sparkline=false`)
          .then(res => {
            setCoins(res.data);
            console.log(coins);
          })
          .catch(error => console.log(error));

  }, [ currency ]);

  function handleChange(newValue) {
    console.log("new currency : ", newValue)
    setCurrency(newValue);
    console.log(currency);
  }

  return (
    <div className="App">
      <Header />
      {coins.length==0?<p></p>:<Cointable coinData={coins} currency={currency} onChange={handleChange}/>}
      
    </div>
  );
}

export default App;
