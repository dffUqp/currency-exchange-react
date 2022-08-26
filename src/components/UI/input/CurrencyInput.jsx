import React from 'react';
import TextField from '@mui/material/TextField';

const CurrencyInput = ({ value, onChange, placeholder }) => {
  return (
    <TextField
      hiddenLabel
      id="filled-hidden-label-by"
      helperText="Type your value"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      variant="filled"
      size="medium"
      sx={{ width: '100%' }}
      type={'text'}
      autoComplete="off"
    />
  );
};

export default CurrencyInput;
