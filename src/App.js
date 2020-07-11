import React from 'react';
import Move from './components/move';

import Board from './components/board';
import './App.css';
// import './components/cup.css';
// import cup from './images/cup.png';

function App() {
  
  return (
    <div className="App">
      <Board>
      {/* <Cup id='1'/>
      <Cup id='2'/>
      <Cup id='3'/> */}
     
      </Board>
      <Move />
    </div>
  );
}

export default App;
