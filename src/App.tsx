import { useState } from 'react'

import { Box, Button, FormGroup, Typography } from '@mui/material'

import StrengthBars from './components/StrengthBars'
import ChackBox from './components/ChackBox'
import SliderLength from './components/SliderLength'
import MainWrapper from './components/MainWrapper'
import Container from './components/Container'
import PasswordField from './components/PasswordField'

import generatePassword from './functions/Functions'

function App() {

    const [password, setPassword] = useState<string>("")
    const [passLength, setPassLength] = useState<number>(8)
    
    // states for checkboxes
    const [includeUppercase, setIncludeUppercase] = useState<boolean>(true)
    const [includeLowercase, setIncludeLowercase] = useState<boolean>(true)
    const [includeNumber, setIncludeNumber] = useState<boolean>(true)
    const [includeSymbol, setIncludeSymbol] = useState<boolean>(true)

    // state for strength
    const [strength, setStrength] = useState<string>("")

    // state for copy button
    const [copy, setCopy] = useState<boolean>(false)    

    return (
        <MainWrapper>
            <Container>
                <PasswordField copied={copy} setCopied={setCopy} password={password}/>
            
            
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography variant="h5">Length: {passLength}</Typography>
                    <SliderLength
                        setLength={setPassLength}
                    />
                </Box>

                <FormGroup>
                    <ChackBox state={includeUppercase} toggle={setIncludeUppercase} lable={"Uppercase"}/>
                    <ChackBox state={includeLowercase} toggle={setIncludeLowercase} lable={"Lowercase"}/>
                    <ChackBox state={includeNumber} toggle={setIncludeNumber} lable={"Number"}/>
                    <ChackBox state={includeSymbol} toggle={setIncludeSymbol} lable={"Symbol"}/>
                </FormGroup>
            
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography variant="h5">Strength: {strength}</Typography>
                    <StrengthBars strength={strength}/>
                </Box>

                <Button 
                    
                    variant="contained" 
                    disabled={(!includeUppercase && !includeLowercase && !includeNumber && !includeSymbol) || passLength < 4}
                    onClick={() => {
                        generatePassword(
                            passLength,
                            includeUppercase,
                            includeLowercase,
                            includeNumber,
                            includeSymbol,
                            setPassword,
                            setStrength,
                            setCopy
                        )
                    }}
                >
                    Generate
                </Button>
            </Container>
        </MainWrapper>
    )
}

export default App