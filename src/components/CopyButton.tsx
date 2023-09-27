import React from 'react'
import { SetStateAction, Dispatch } from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';
import { IconButton } from '@mui/material';


type CopyButtonProps  = {
    password: string;
    copied: boolean;
    setCopied: Dispatch<SetStateAction<boolean>>;
}

const CopyButton: React.FC<CopyButtonProps> = ({copied, setCopied, password}) => {

    const clickHandle = () => {
        navigator.clipboard.writeText(password)
        setCopied(true)
    }

    return (
        <IconButton
            onClick={clickHandle}
            aria-label="delete">
            {!copied ? <ContentCopyIcon /> : <DoneIcon/>}
        </IconButton>
    )
}

export default CopyButton
