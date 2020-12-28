import React from "react"
import * as S from "./styled"

import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <S.Main>{children}</S.Main>
    </>
  )
}

export default Layout
