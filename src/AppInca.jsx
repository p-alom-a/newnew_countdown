import { useState, useEffect } from 'react'
import './AppInca.css'

function AppInca() {
  // Preload celebration GIF
  useEffect(() => {
    const img = new Image()
    img.src = '/happy-birthday-birthday.gif'
  }, [])

  const [targetDate] = useState(() => new Date('2025-08-30T15:30:00').getTime())
  // Pour tester la célébration :
  // const [targetDate] = useState(() => new Date().getTime() + 8000) // 8 secondes à partir de maintenant
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const [isCountdownFinished, setIsCountdownFinished] = useState(false) // Pour voir le countdown

  useEffect(() => {
    // Calcul initial immédiat
    const now = new Date().getTime()
    const distance = targetDate - now

    if (distance > 0) {
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
      setIsCountdownFinished(false)
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      setIsCountdownFinished(true)
    }

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
        setIsCountdownFinished(false)
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        setIsCountdownFinished(true)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="inca-app">
      <div className="inca-background">
        <div className="mountain-silhouette"></div>
        <div className="geometric-pattern"></div>
      </div>
      
      <div className="temple-structure">
        <div className="temple-header">
          <div className="sun-disc">
            <div className="kuzco-portrait">
              <img src="/kuzco.png" alt="Empereur Kuzco" />
            </div>
            <div className="sun-rays"></div>
          </div>
        </div>
        
        <div className="ceremonial-title">
          <h1 className="inca-title">El Emperador está esperando</h1>
          <div className="inca-divider"></div>
        </div>

        <div className="temple-date">
          <div className="ceremonial-banner">
            <span className="date-text">Samedi 30 Août • 15h30</span>
          </div>
        </div>

        <div className="sacred-countdown">
          <div className="stone-tablets">
            <div className="tablet">
              <div className="hieroglyph-top"></div>
              <div className="number-carved">{timeLeft.days.toString().padStart(2, '0')}</div>
              <div className="inca-label">Jours</div>
            </div>
            <div className="tablet">
              <div className="hieroglyph-top"></div>
              <div className="number-carved">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="inca-label">Heures</div>
            </div>
            <div className="tablet">
              <div className="hieroglyph-top"></div>
              <div className="number-carved">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="inca-label">Minutes</div>
            </div>
            <div className="tablet">
              <div className="hieroglyph-top"></div>
              <div className="number-carved">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="inca-label">Secondes</div>
            </div>
          </div>
        </div>

        {isCountdownFinished && (
          <div className="celebration">
            <div className="fireworks">
              <div className="firework"></div>
              <div className="firework"></div>
              <div className="firework"></div>
              <div className="firework"></div>
              <div className="firework"></div>
            </div>
            <div className="boom-baby-celebration">
              <span className="boom-text">Boom, baby!</span>
            </div>
            <div className="celebration-gif">
              <img src="/happy-birthday-birthday.gif" alt="Celebration!" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AppInca