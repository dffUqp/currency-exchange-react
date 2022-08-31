import React from 'react';
import { MenuItem, FormControl, Select } from '@mui/material';
import PropTypes from 'prop-types';

const CurrencySelect = ({ option, value, onChange }) => {
  return (
    <FormControl fullWidth>
      <Select
        labelId="demo-simple-select-required-label"
        id="demo-simple-select-required"
        value={value}
        displayEmpty
        onChange={(e) => {
          onChange(e.target.value);
        }}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        {option.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                columnGap: '10px',
              }}
            >
              <img src={item.src} alt={item.alt} />
              <span>{item.name}</span>
            </div>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CurrencySelect;

CurrencySelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  option: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      src: PropTypes.string,
      alt: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};
