import { formatCurrency } from '../../utils/formarCurrency';

export const changemainInputValue = (value, baseRates) => {
  value = value.replace(
    // eslint-disable-next-line
    /[\\A-Za-z!"£$%^&\-\)\(*+_={};:'@#~x,Š\/<>\" "\?|`¬\]\[]/g,
    ''
  );

  const calculatedValue = formatCurrency(
    (baseRates.item2 / baseRates.item1) * value
  );

  return {
    type: 'CHANGE_MAIN_INPUT',
    payload: {
      mainInput: formatCurrency(value),
      secondaryInput: calculatedValue,
    },
  };
};

export const changesecondaryInputValue = (value, baseRates) => {
  value = value.replace(
    // eslint-disable-next-line
    /[\\A-Za-z!"£$%^&\-\)\(*+_={};:'@#~x,Š\/<>\" "\?|`¬\]\[]/g,
    ''
  );
  const calculatedValue = formatCurrency(
    (baseRates.item1 / baseRates.item2) * value
  );

  return {
    type: 'CHANGE_SECONDARY_INPUT',
    payload: {
      secondaryInput: formatCurrency(value),
      mainInput: calculatedValue,
    },
  };
};

export const setmainSelect = (value, inputValue, baseRates, currentRate) => {
  inputValue = inputValue.replace(
    // eslint-disable-next-line
    /[\\A-Za-z!"£$%^&\-\)\(*+_={};:'@#~x,Š\/<>\" "\?|`¬\]\[]/g,
    ''
  );

  const calculatedValue =
    inputValue === ''
      ? ''
      : formatCurrency((baseRates.item2 / currentRate) * inputValue);

  return {
    type: 'SET_MAIN_SELECT',
    payload: {
      value: value,
      secondaryInput: calculatedValue,
    },
  };
};

export const setsecondarySelect = (
  value,
  inputValue,
  baseRates,
  currentRate
) => {
  inputValue = inputValue.replace(
    // eslint-disable-next-line
    /[\\A-Za-z!"£$%^&\-\)\(*+_={};:'@#~x,Š\/<>\" "\?|`¬\]\[]/g,
    ''
  );

  const calculatedValue =
    inputValue === '' 
      ? ''
      : formatCurrency((currentRate / baseRates.item1) * inputValue);

  return {
    type: 'SET_SECONDARY_SELECT',
    payload: {
      value: value,
      secondaryInput: calculatedValue,
    },
  };
};
