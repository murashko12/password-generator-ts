import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react'

type ChackBoxProps = {
  state: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
  lable: string;
}

const ChackBox: React.FC<ChackBoxProps> = ({state, toggle, lable}) => {
  return (
    <>
      <FormControlLabel
        sx={{ display: "flex", justifyContent: "space-between"}}
        control={
          <Checkbox checked={state} onChange={(e) => toggle(e.target.checked)} color="success" name={lable} />
        }
        label={<Typography variant="h5">{lable}</Typography>}
      />
      
    </>
  )
}

export default ChackBox
