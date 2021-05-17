import React, {useState, useEffect} from 'react';
import './App.css';
import Cointable from './components/table';

import Header from './components/header/header';

function App() {

  return (
    <div className="App">
      <Header />
      <Cointable />
    </div>
  );
}

export default App;
