import { Box, styled } from '@mui/material'
import React from 'react'

const ContainerStyles = styled(Box)({
    width: "500px",
    height: "500px",
    background: "white",
    padding: "20px"
})

const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <ContainerStyles>
      {children}
    </ContainerStyles>
  )
}

export default Container
