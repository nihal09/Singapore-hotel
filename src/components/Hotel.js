import React, { Component } from 'react';

class Hotel extends Component {
  constructor(props) {
      super(props);
      

    };


render(){
  return (
    
      this.props.hotel.map(x => <div className='hotel'>
      <div className="hotel__content"alt={x.Brand}>
        <h4 className='hotel__name'>{x.Brand} <span className='hotel__stars'>{'⭐️'.repeat(x.Stars)}</span></h4>
        <h4 className='hotel__name'>{x.Variety}</h4>
        <h4 className='hotel__name'>{x.Style}</h4>
        <h4 className='hotel__name'>🏠{x.Country}</h4>
        <h4 className='hotel__name'>☀️{x['Top Ten']}</h4>
        </div>
        </div>
        )
      )
    }
  }
     

export default Hotel;[]