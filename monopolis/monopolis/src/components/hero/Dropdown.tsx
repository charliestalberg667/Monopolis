import React from 'react';
import { styled, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}
const StyledFormControl = styled(FormControl)({
  minWidth: 150,
  margin: '0 8px',
  '& .MuiInputLabel-root': {
    color: '#009F32',
    '&.Mui-focused': {
      color: '#009F32',
    },
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
  },
  '& .MuiSelect-icon': {
    color: '#009F32',
  },
});

const Dropdown: React.FC<DropdownProps> = ({ label, options, value, onChange }) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  return (
    <StyledFormControl variant="outlined" size="small">
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-label`}
        value={value}
        onChange={handleChange}
        label={label}
        sx={{
          '& .MuiSelect-select': {
            color: '#009F32',
            fontWeight: 500,
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};

export default Dropdown;
