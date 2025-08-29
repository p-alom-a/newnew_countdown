import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const targetDate = new Date('2025-08-30T15:30:00').getTime()
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="app">
      <div className="inca-pattern"></div>
      <div className="container">
        <div className="llama-icon">🦙</div>
        <h1 className="emperor-title">El Emperador Countdown</h1>
        <p className="subtitle">Jusqu'à Samedi 30 Août • 15h30</p>
        
        <div className="countdown-grid">
          <div className="time-block">
            <div className="number">{timeLeft.days.toString().padStart(2, '0')}</div>
            <div className="label">Jours</div>
          </div>
          <div className="separator">:</div>
          <div className="time-block">
            <div className="number">{timeLeft.hours.toString().padStart(2, '0')}</div>
            <div className="label">Heures</div>
          </div>
          <div className="separator">:</div>
          <div className="time-block">
            <div className="number">{timeLeft.minutes.toString().padStart(2, '0')}</div>
            <div className="label">Minutes</div>
          </div>
          <div className="separator">:</div>
          <div className="time-block">
            <div className="number">{timeLeft.seconds.toString().padStart(2, '0')}</div>
            <div className="label">Secondes</div>
          </div>
        </div>

        <div className="quote">
          "Boom, baby! 👑"
        </div>
      </div>
    </div>
  )
}

export default App
