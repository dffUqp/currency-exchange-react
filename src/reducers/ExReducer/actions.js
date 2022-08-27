import { getOnlyNumbers, roundCurrency } from '../../utils';

export const changemainInputValue = (value, baseRates) => {
  value = getOnlyNumbers(value);

  const calculatedValue = roundCurrency(
    (baseRates.item2 / baseRates.item1) * value
  );

  return {
    type: 'CHANGE_MAIN_INPUT',
    payload: {
      mainInput: value,
      secondaryInput: calculatedValue,
    },
  };
};

export const changesecondaryInputValue = (value, baseRates) => {
  value = getOnlyNumbers(value);

  const calculatedValue = roundCurrency(
    (baseRates.item1 / baseRates.item2) * value
  );

  return {
    type: 'CHANGE_SECONDARY_INPUT',
    payload: {
      secondaryInput: value,
      mainInput: calculatedValue,
    },
  };
};

export const setmainSelect = (value, inputValue, baseRates, currentRate) => {
  const calculatedValue = roundCurrency(
    (baseRates.item2 / currentRate) * inputValue
  );

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
  const calculatedValue = roundCurrency(
    (currentRate / baseRates.item1) * inputValue
  );

  return {
    type: 'SET_SECONDARY_SELECT',
    payload: {
      value: value,
      secondaryInput: calculatedValue,
    },
  };
};
