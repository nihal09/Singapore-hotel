import React from 'react';

const Hotel = (hotel) => {
  const { name, facilities, price, region } = hotel;
  const stars = <span className='hotel__stars'>{'⭐️'.repeat(hotel.starRating)}</span>;  

  return (
    <div className='hotel'>
      <img className='hotel__image' src= 'https://source.unsplash.com/270x170/?hotel,building/' alt={hotel.name}/>
      <div className="hotel__content" >
        <h4 className='hotel__name'>{name} {stars}</h4>
        <h4 className='hotel__name'>₹ {price}/Night</h4>
        <h4 className='hotel__name'>🏠{region}</h4>
        <h4 className='hotel__name'>☀️{facilities}</h4>
      </div>
      </div>
  );
};
export default Hotel;