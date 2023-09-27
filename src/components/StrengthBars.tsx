import React from 'react'

type StrengthRatingProps = {
    strength: string
}

const StrengthBars: React.FC<StrengthRatingProps> = ({strength}) => {
    let colors: string[] = []
    switch (strength) {
        case "TOO WEAK!":
            colors = ["red","","",""]
            break;
        case "WEAK":
            colors = ["orange","orange","",""]
            break;
        case "MEDIUM":
            colors = ["yellow","yellow","yellow",""]
            break;
        case "STRONG":
            colors=["green","green","green","green"]
            break;
        default:
            colors = ["","","",""]
            break;
    }

    const bars = (colors: string[]): React.ReactNode[] => {
        return colors.map((color: string, index) => {
            return <div key={index} style={{width: "30px", height: "30px", border: "2px solid black", backgroundColor: `${color}`}}></div>
        })
    }
    return (
        <div>
            {bars(colors)}
        </div>
    )
}

export default StrengthBars
