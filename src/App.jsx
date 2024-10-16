import DigitalClock from './components/DigitalClock'
import Date from './components/Date'
import TankStations from './components/TankStations'

import './App.css'

function App() {
  return (
    <div className='app-container'>
    <DigitalClock/>
    <TankStations/>
    <Date/>
    </div>
  )
}

export default App
