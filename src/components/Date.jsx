import React from 'react'

function Date() {
    
    const date = new globalThis.Date()

    function formatDate()
    {
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, "0")
        const day = String(date.getDate()).padStart(2, "0")
  
      return `${day}/${month}/${year}`
    }


  return (
    <div className='date-container'>
      <span className='date'>{formatDate()}</span>
    </div>
  )
}

export default Date
