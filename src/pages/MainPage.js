import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import CardHolder from '../components/card-holder/CardHolder';

export default function MainPage() {
  return (
    <div className='MainPageContainer'>
      <Navbar />
      <Hero />
      <CardHolder />
    </div>
  );
}
