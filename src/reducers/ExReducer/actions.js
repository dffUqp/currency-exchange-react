import { getOnlyNumbers, numberWithSpaces, roundCurrency } from '../../utils';

export const changeMainInputValue = (value, baseRates) => {
  value = getOnlyNumbers(value);

  const calculatedValue = roundCurrency(
    (baseRates.item2 / baseRates.item1) * value
  );

  return {
    type: 'CHANGE_MAIN_INPUT',
    payload: {
      mainInput: numberWithSpaces(value),
      secondaryInput: numberWithSpaces(calculatedValue),
    },
  };
};

export const changeSecondaryInputValue = (value, baseRates) => {
  value = getOnlyNumbers(value);

  const calculatedValue = roundCurrency(
    (baseRates.item1 / baseRates.item2) * value
  );

  return {
    type: 'CHANGE_SECONDARY_INPUT',
    payload: {
      secondaryInput: numberWithSpaces(value),
      mainInput: numberWithSpaces(calculatedValue),
    },
  };
};

export const setMainSelect = (value, inputValue, baseRates, currentRate) => {
  inputValue = getOnlyNumbers(inputValue);

  const calculatedValue = roundCurrency(
    (baseRates.item2 / currentRate) * inputValue
  );

  return {
    type: 'SET_MAIN_SELECT',
    payload: {
      value: value,
      secondaryInput: numberWithSpaces(calculatedValue),
    },
  };
};

export const setSecondarySelect = (
  value,
  inputValue,
  baseRates,
  currentRate
) => {
  inputValue = getOnlyNumbers(inputValue);

  const calculatedValue = roundCurrency(
    (currentRate / baseRates.item1) * inputValue
  );

  return {
    type: 'SET_SECONDARY_SELECT',
    payload: {
      value: value,
      secondaryInput: numberWithSpaces(calculatedValue),
    },
  };
};
