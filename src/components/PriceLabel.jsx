import React from 'react'

function PriceLabel(props) {
  const price_string = props.price.toFixed(3).toString().replace('.', '')

  return (
    <div className='price-label-container'>
      <span className='price-label-currency'>€</span>
      <span className='price-label-digit'>{price_string[0]}</span>
      <span className='price-label-seperator'>.</span>
      <span className='price-label-digit'>{price_string[1]}</span>
      <span className='price-label-digit'>{price_string[2]}</span>
      <span className='price-label-mini-digit'>{price_string[3]}</span>
    </div>
  )
}

export default PriceLabel
