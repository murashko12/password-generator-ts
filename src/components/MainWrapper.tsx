import { Box, styled } from '@mui/material'
import React from 'react'

const MainWrapperStyles = styled(Box)({
    width: "100%",
    height: "100vh",
    background: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const MainWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <MainWrapperStyles>
      {children}
    </MainWrapperStyles>
  )
}

export default MainWrapper
