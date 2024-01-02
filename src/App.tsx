import React, { useState } from 'react';
import './style/App.css';
import BeerList from './BeerList';

function App() {
  const [beers, setBeers] = useState(['Coreff', 'Leff', 'Corona']);
  const [newBeer, setNewBeer] = useState('');

  const addBeer = () => {
    if (newBeer.trim() !== '') {
      setBeers([...beers, newBeer]);
      setNewBeer('');
    }
  };

  const remove = (index:number) => {
    const newBeers = [...beers];
    newBeers.splice(index, 1);
    setBeers([...newBeers]);
  }

  return (
    <div className="App">
      <h1>La bonne chope</h1>
      <BeerList funcRemove={remove} initialBeers={beers} />
      <div className='input'>
        <input
          type="text"
          value={newBeer}
          onChange={(e) => setNewBeer(e.target.value)}
        />
        <button onClick={addBeer}>Proposer une Bière</button>
      </div>
    </div>
  );
}

export default App;

