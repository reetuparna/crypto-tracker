import React, {useState, useEffect} from 'react';
import './App.css';
import Cointable from './components/table';
import axios from 'axios';

function App() {

  const [coins, setCoins] = useState([]);

  useEffect(() => {

           axios
          .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false')
          .then(res => {
            setCoins(res.data);
            console.log(res.data);
          })
          .catch(error => console.log(error));

  }, []);

  return (
    <div className="App">
      
      {coins.length==0?<p></p>:<Cointable coinData={coins}/>}
      
    </div>
  );
}

export default App;
