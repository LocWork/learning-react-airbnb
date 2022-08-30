import React from 'react';
import Card from '../card/Card';
// import avatar1 from '../../images/avatar1.png';
// import avatar2 from '../../images/avatar2.png';
// import avatar3 from '../../images/avatar3.png';
import './CardHolder.css';
import data from '../../data.js';
export default function CardHolder() {
  const cards = data.map((items) => {
    return <Card key={items.id} items={items} />;
  });

  return <div className='CardHolderContainer'>{cards}</div>;
}

//Early Code
//  <Card
//         img='avatar1.png'
//         status='SOLD OUT'
//         rating={5.0}
//         reviewCount={6}
//         country='USA'
//         location
//         title='Life lessons with Katie Zaferes'
//         price='136'
//       />
//       <Card
//         img='avatar2.png'
//         status='ONLINE'
//         rating={5.0}
//         reviewCount={30}
//         country='USA'
//         title='Learn wedding photography'
//         price='125'
//       />
//       <Card
//         img='avatar3.png'
//         status=''
//         rating={4.8}
//         reviewCount={2}
//         country='USA'
//         title='Group Mountain Biking'
//         price='50'
//       />
