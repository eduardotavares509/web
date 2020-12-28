import React from "react"
import * as S from "./styled"

const Timer = () => {
  return (
    <S.Container>
      <S.Timer>
        <p>02h 43m 54s</p>
        <svg height="500" width="500">
          <circle
            cx="250"
            cy="250"
            r="200"
            stroke="#dbdbdb"
            stroke-width="3"
            fill="transparent"
          />
        </svg>
      </S.Timer>
    </S.Container>
  )
}

export default Timer
