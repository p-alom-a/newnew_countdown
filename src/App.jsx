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
      <div className="background-pattern"></div>
      <div className="magic-sparkles">
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
      </div>
      
      <div className="kuzco-shrine">
        <div className="kuzco-mega-hero">
          <div className="kuzco-throne">
            <div className="kuzco-avatar">
              <img src="/kuzco.png" alt="Sa Majesté Impériale Kuzco" />
            </div>
            <div className="royal-aura"></div>
            <div className="rotating-ring"></div>
          </div>
        </div>
        <div className="emperor-title">
          <h1 className="royal-name">Boom, baby! Le compte à rebours de l'Empereur</h1>
        </div>
      </div>

      <div className="announcement-banner">
        <div className="banner-text">
          <span className="event-date">Samedi 30 Août • 15h30</span>
        </div>
      </div>

      <div className="countdown-palace">
        <div className="countdown-grid">
          <div className="time-throne">
            <span className="time-number">{timeLeft.days.toString().padStart(2, '0')}</span>
            <span className="time-label">Jours</span>
          </div>
          <div className="time-throne">
            <span className="time-number">{timeLeft.hours.toString().padStart(2, '0')}</span>
            <span className="time-label">Heures</span>
          </div>
          <div className="time-throne">
            <span className="time-number">{timeLeft.minutes.toString().padStart(2, '0')}</span>
            <span className="time-label">Minutes</span>
          </div>
          <div className="time-throne">
            <span className="time-number">{timeLeft.seconds.toString().padStart(2, '0')}</span>
            <span className="time-label">Secondes</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
