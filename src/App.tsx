import { useState, SetStateAction, Dispatch } from 'react'
import './App.css'
import StrengthBars from './components/StrengthBars'

import { Box, Button, FormGroup } from '@mui/material'

import ChackBox from './components/ChackBox'

import CopyButton from './components/CopyButton'
import SliderLength from './components/SliderLength'

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

    // password generate function
    
    
    
    
    
    

    return (
        <>
            
            <div style={{display: 'flex'}}>
                <input 
                    readOnly
                    type="text"
                    value={password}
                />
                <CopyButton copied={copy} setCopied={setCopy} password={password}/>
            </div>
            
            
            <Box sx={{ width: 300 }}>
                <SliderLength
                    setLength={setPassLength}
                />
                <p>{passLength}</p>
            </Box>



            
            <FormGroup>
                <ChackBox state={includeUppercase} toggle={setIncludeUppercase} lable={"Uppercase"}/>
                <ChackBox state={includeLowercase} toggle={setIncludeLowercase} lable={"Lowercase"}/>
                <ChackBox state={includeNumber} toggle={setIncludeNumber} lable={"Number"}/>
                <ChackBox state={includeSymbol} toggle={setIncludeSymbol} lable={"Symbol"}/>
            </FormGroup>
            
            <StrengthBars strength={strength}/>
            
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
            
        </>
    )
}

export default App

function generatePassword(
    length: number,
    upper: boolean,
    lower: boolean,
    num: boolean,
    sym: boolean,
    setPassword: Dispatch<SetStateAction<string>>,
    setStrength: Dispatch<SetStateAction<string>>,
    setCopied: Dispatch<SetStateAction<boolean>>
) {
    // collection of symbols
    const UPPERCASE_CHAR: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const LOWERCASE_CHAR: string = "abcdefghijklmnopqrstuvwxyz"
    const NUMBER_CHAR: string = "1234567890"
    const SYMBOL_CHAR: string = `!@#$%^&*()-_=+\`[]{}\\|;:\'",.<>/?`

    // initialises result, but also resets password if checkboxes are all unchecked
    let result: string[] = []

    // resets strength and copy when new password is generated. Strength needs to be reset in the case that a second password is not correctly generated
    setStrength("")
    setCopied(false)

    let allChar: string = ""
    
    // ensure at least one of each if they are meant to be included
    
    if (upper === true) {
        result.push(UPPERCASE_CHAR.charAt(getRandomNumber(UPPERCASE_CHAR.length - 1)))
        allChar += UPPERCASE_CHAR
    }
    if (lower === true) {
        result.push(LOWERCASE_CHAR.charAt(getRandomNumber(LOWERCASE_CHAR.length - 1)))
        allChar += LOWERCASE_CHAR
    }
    if (num === true) {
        result.push(NUMBER_CHAR.charAt(getRandomNumber(NUMBER_CHAR.length - 1)))
        allChar += NUMBER_CHAR
    }
    if (sym === true) {
        result.push(SYMBOL_CHAR.charAt(getRandomNumber(SYMBOL_CHAR.length - 1)))
        allChar += SYMBOL_CHAR
    }

    // generates the rest randomly
    for (let i: number = result.length; i < length; i++) {
        result.push(allChar.charAt(getRandomNumber(allChar.length - 1)))
    }

    // shuffles the array to generate random order of characters
    shuffle(result)

    // determines strength of the password
    // FIX THIS
    if (length === 4) {
        setStrength("TOO WEAK!")
    } else {
        let strengthRate: number = 0
        upper ? strengthRate++ : undefined
        lower ? strengthRate++ : undefined
        num ? strengthRate++ : undefined
        sym ? strengthRate++ : undefined
        switch (strengthRate) {
            case 1:
                setStrength("TOO WEAK!")
                break
            case 2:
                setStrength("WEAK")
                break
            case 3:
                setStrength("MEDIUM")
                break
            case 4:
                setStrength("STRONG")
                break
        }
    }
    // sets the state to update the password
    setPassword(result.join(""))
}

//get random number between 0 and n
function getRandomNumber(n: number): number {
    return Math.floor(Math.random() * (n + 1))
}

// shuffles the array to generate random order of characters
function shuffle(array: string[]) {
    let currentIndex: number = array.length, randomIndex
  
    // While there remain elements to shuffle
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;
        
        // And swap it with the current element
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array;
}
