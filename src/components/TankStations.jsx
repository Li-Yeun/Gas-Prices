import React from 'react'
import TankStation from './TankStation'

import AviaLogo from '/avia.png'
import ShellLogo from '/shell.png'
import TinQLogo from '/tinQ.png'

import './TankStations.css'
import { useQuery } from '@tanstack/react-query'

const getPrices = async () => {
  const res = await fetch('https://gogohmblcpn6sct47ajl2peuji0ondeo.lambda-url.eu-west-3.on.aws/', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ action: "retrieve" })  // Include the action in the body
  });

  // Check if the response status is OK (status code 200)
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`); // Throw error with status
  }

  // Parse the response data as JSON
  const responseData = await res.json();

  return responseData

};

function TankStations() {
	// Using the hook
	const {data, error, isLoading} = useQuery(['prices'], getPrices);
	// Error and Loading states
	if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;

  const {current_date_items, previous_date_items} = data
  
  return (
    <div className='tank-stations-container'>
      <TankStation image={TinQLogo} current_price={current_date_items['TinQ euro95']} price_fluctuation={(((current_date_items['TinQ euro95'] - previous_date_items['TinQ euro95']) / previous_date_items['TinQ euro95']) * 100).toFixed(2)}/>
      <TankStation image={ShellLogo} current_price={current_date_items['Shell euro95']} price_fluctuation={(((current_date_items['Shell euro95'] - previous_date_items['Shell euro95']) / previous_date_items['Shell euro95']) * 100).toFixed(2)}/>
      <TankStation image={AviaLogo} current_price={current_date_items['Avia euro95']} price_fluctuation={(((current_date_items['Avia euro95'] - previous_date_items['Avia euro95']) / previous_date_items['Avia euro95']) * 100).toFixed(2)}/>
    </div>
  )
}

export default TankStations
