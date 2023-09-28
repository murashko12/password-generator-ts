export default function generatePassword(
    length: number,
    upper: boolean,
    lower: boolean,
    num: boolean,
    sym: boolean,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    setStrength: React.Dispatch<React.SetStateAction<string>>,
    setCopied: React.Dispatch<React.SetStateAction<boolean>>
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
