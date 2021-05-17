import React from 'react';
import './App.css';
import Cointable from './components/table/table';
import Header from './components/header/header';
import CardContainer from './components/card-container/cardContainer';
import Panel from './components/panel/panel';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="container">
        <CardContainer />
        <div className="table-panel-container">
          <Cointable />
          <Panel />
        </div>
      </div>
      
    </div>
  );
}

export default App;
