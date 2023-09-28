import React from 'react'

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';

type CopyButtonProps  = {
    password: string;
    copied: boolean;
    setCopied: React.Dispatch<React.SetStateAction<boolean>>;
}

const PasswordField: React.FC<CopyButtonProps> = ({copied, setCopied, password}) => {

    const clickHandle = () => {
        if (password) {
            navigator.clipboard.writeText(password)
            setCopied(true)
        }
    }

    return ( 
        <FormControl sx={{ width: '100%' }} variant="outlined">
          
            <OutlinedInput
                id="outlined-adornment-password"
                readOnly
                type="text"
                value={password}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password copy"
                            onClick={clickHandle}
                            edge="end"
                        >
                            {(!copied || !password) ? <ContentCopyIcon /> : <DoneIcon/>}
                        </IconButton>
                    </InputAdornment>
                }
            />

        </FormControl>
    )
}

export default PasswordField
