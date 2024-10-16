import React from 'react'
import PriceLabel from './PriceLabel'


function TankStation(props) {

  function formatFluctuation(price_fluctuation)
  {
      if (price_fluctuation == 0)
        return <div className='price-fluctuation neutral'>{`\u00B1${props.price_fluctuation}%`}</div>
      else if (price_fluctuation > 0)
        return <div className='price-fluctuation positive'>{`+${props.price_fluctuation}%`}</div>
      else
        return <div className='price-fluctuation negative'>{`${props.price_fluctuation}%`}</div>
  }   

  return (
    <div className='tank-station-container'>
      <img src={props.image} alt="" />
      <PriceLabel price={props.current_price}/>
      {formatFluctuation(props.price_fluctuation)}
    </div>
  )
}

export default TankStation
