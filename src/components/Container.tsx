import { Box, styled } from '@mui/material'
import React from 'react'

const ContainerStyles = styled(Box)({
    width: "400px",
    height: "480px",
    background: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "10px"
})

const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <ContainerStyles>
      {children}
    </ContainerStyles>
  )
}

export default Container
