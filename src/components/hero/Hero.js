import React from 'react';
import './Hero.css';
import photoGrid from '../../images/photo-grid.png';

export default function Hero() {
  return (
    <div className='HeroContainer'>
      <div className='photo-container'>
        <img src={photoGrid} alt='photogrid' className='photo-grid' />
      </div>
      <div className='content-container'>
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
