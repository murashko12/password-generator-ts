import { Checkbox, FormControlLabel } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react'

type ChackBoxProps = {
  state: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
  lable: string;
}

const ChackBox: React.FC<ChackBoxProps> = ({state, toggle, lable}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox checked={state} onChange={(e) => toggle(e.target.checked)} color="success" name={lable} />
      }
      label={lable}
    />
  )
}

export default ChackBox
