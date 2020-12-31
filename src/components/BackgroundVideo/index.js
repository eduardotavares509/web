import React, { useState } from "react"
import * as S from "./styled"
import fireworks from "./fireworks.mp4"
import retrospectiti from "./videoplayback.mp4"

const BackgroundVideo = ({ newYear }) => {
  console.log(newYear)
  if (!newYear) {
    return (
      <S.Video autoPlay loop muted>
        <source src={retrospectiti} />
      </S.Video>
    )
  } else {
    return (
      <S.Video autoPlay loop muted>
        <source src={fireworks} />
      </S.Video>
    )
  }
}

export default BackgroundVideo
