import React, { useRef, useState, useEffect } from "react"
import * as S from "./styled"

const Timer = ({ setNewYear }) => {
  const [timerDays, setTimerDays] = useState("00")
  const [timerHours, setTimerHours] = useState("00")
  const [timerMinutes, setTimerMinutes] = useState("00")
  const [timerSeconds, setTimerSeconds] = useState("00")

  let interval = useRef()

  const startTimer = () => {
    const destinationDate = new Date(2021, 0, 0).getTime()
    //const destinationDate = new Date().getTime()

    interval = setInterval(() => {
      const currentTime = new Date().getTime()
      const distance = destinationDate - currentTime

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      if (distance < 0) {
        clearInterval(interval.current)
        //* FINALIZAR TIMER
        setNewYear()
      } else {
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    }, 1000)
  }

  useEffect(() => {
    startTimer()
    return () => {
      clearInterval(interval.current)
    }
  })

  return (
    <S.Container>
      <S.Timer>
        <p>
          {timerDays}d {timerHours}h {timerMinutes}m {timerSeconds}s
        </p>
        <svg height="500" width="500">
          <circle
            cx="250"
            cy="250"
            r="200"
            stroke="#dbdbdb"
            stroke-width="3"
            fill="none"
          />
          <circle
            className="porcentage"
            cx="250"
            cy="250"
            r="200"
            stroke-width="15"
            fill="none"
          />
        </svg>
      </S.Timer>
      <button onClick={() => setNewYear()}>SHOW</button>
    </S.Container>
  )
}

export default Timer
