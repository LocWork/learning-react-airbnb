import React from 'react';
import './Card.css';
import starIcon from '../../images/star.png';
export default function Card(props) {
  let badgeText;
  if (props.items.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.items.location === 'Online') {
    badgeText = 'ONLINE';
  }
  return (
    <div className='CardContainer'>
      <div className='top-container'>
        <img
          src={require(`../../images/${props.items.coverImg}`)}
          alt='avatar'
        />
        {badgeText && <p className='status'>{badgeText}</p>}
      </div>
      <div className='bottom-container'>
        <div className='rating-container'>
          <img src={starIcon} alt='staricon' className='card--star' />
          <span>{props.items.stats.rating} </span>
          <span className='gray'>({props.items.stats.reviewCount}) •</span>
          <span className='gray'> {props.items.location}</span>
        </div>
        <p>{props.items.title}</p>
        <p>
          <span className='bold'>From ${props.items.price} </span>/ person
        </p>
      </div>
    </div>
  );
}
