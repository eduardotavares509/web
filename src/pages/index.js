import React, { useState } from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import PlayButton from "../components/PlayButton"
import Timer from "../components/timer"
import BackgroundVideo from "../components/BackgroundVideo"

const IndexPage = () => {
  const [showTimer, setShowTimer] = useState(false)
  const [showBackgroundVideo, setShowBackgroundVideo] = useState(false)
  const [newYear, setNewYear] = useState(false)

  const clickShowTimer = () => {
    setShowTimer(true)
    setShowBackgroundVideo(true)
  }

  const updateVideo = () => {
    setNewYear(true)
    console.log("SHOW", newYear)
  }

  return (
    <Layout>
      <SEO title="Home" />
      {!showTimer && <PlayButton showTimerFunction={clickShowTimer} />}
      {showBackgroundVideo && <BackgroundVideo newYear={newYear} />}
      {showTimer && <Timer setNewYear={updateVideo} />}
    </Layout>
  )
}

export default IndexPage
