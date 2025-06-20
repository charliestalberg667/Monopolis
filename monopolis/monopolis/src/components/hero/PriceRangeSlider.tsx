import React from 'react';
import { Box, Typography } from '@mui/material';

interface PriceRangeSliderProps {
  min: number;
  max: number;
  value: number[];
  onChange: (value: number[]) => void;
  sliderComponent: React.ComponentType<any>;
}

const formatPrice = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
};

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  min,
  max,
  value,
  onChange,
  sliderComponent: SliderComponent,
}) => {
  const handleChange = (_event: Event, newValue: number | number[]) => {
    onChange(newValue as number[]);
  };

  return (
    <Box sx={{ width: '100%', px: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="body2" color="#009F32">
          {formatPrice(value[0])}
        </Typography>
        <Typography variant="body2" color="#009F32">
          {formatPrice(value[1])}
        </Typography>
      </Box>
      <SliderComponent
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        min={min}
        max={max}
        sx={{
          '& .MuiSlider-rail': {
            opacity: 0.3,
            backgroundColor: '#009F32',
          },
          '& .MuiSlider-track': {
            border: 'none',
            backgroundColor: '#009F32',
          },
          '& .MuiSlider-thumb': {
            height: 20,
            width: 20,
            backgroundColor: '#fff',
            border: '2px solid #009F32',
            '&:hover, &.Mui-focusVisible, &.Mui-active': {
              boxShadow: '0 0 0 8px rgba(0, 159, 50, 0.1)',
            },
          },
        }}
      />
    </Box>
  );
};

export default PriceRangeSlider;
