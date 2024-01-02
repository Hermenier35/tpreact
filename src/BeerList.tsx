import React from 'react';
import PropTypes from 'prop-types';
import './style/BeerList.css';
import Img from'../src/images/back.png';


BeerList.propTypes = {
  funcRemove: PropTypes.func
};

interface BeerProps {
  id: number;
  name: string;
  onRemove: () => void;
}


function Beer(props : BeerProps) {
  return (
    <li key={props.id}>
      {props.name}{' '}
      <button onClick={props.onRemove}>Retirer</button>
    </li>
  );
}

interface BeerListProps {
  initialBeers: string[];
  funcRemove: (index: number) => void; 
}

function BeerList(props: BeerListProps) {
  const removeBeer = (index: number) => {
    props.funcRemove(index)
  };

  return (
    <div className = "maListe">
      <div className='liste'>
        <h2>Nos Bieres </h2>
        <ul>
          {props.initialBeers.map((beer, index) => (
            <Beer
              key={index}
              id={index}
              name={beer}
              onRemove={() => removeBeer(index)}
            />
          ))}
        </ul>
      </div>
      
      <img src = {Img} alt="tonneau"/> 
      
    </div>
  );
}

export default BeerList;
