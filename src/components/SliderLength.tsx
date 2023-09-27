import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

type SliderLengthProps = {
  setLength: React.Dispatch<React.SetStateAction<number>>
}

const SliderLength: React.FC<SliderLengthProps> = ({setLength}) =>  {

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    setLength(newValue as number);
  };
  
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Password Length"
        defaultValue={8}
        step={1}
        marks
        min={1}
        max={10}
        onChange={handleSliderChange}
      />
    </Box>
  );
}
export default SliderLength