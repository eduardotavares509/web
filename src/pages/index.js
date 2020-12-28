import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import PlayButton from "../components/PlayButton"
import Timer from "../components/timer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <PlayButton /> */}
    <Timer />
  </Layout>
)

export default IndexPage
