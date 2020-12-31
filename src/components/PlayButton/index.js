import React from "react"
import * as S from "./styled"

const PlayButton = ({ showTimerFunction }) => {
  return (
    <S.Container>
      <button onClick={() => showTimerFunction()}>{">"}</button>
      <p>Clique no botão para continuar</p>
    </S.Container>
  )
}

export default PlayButton
