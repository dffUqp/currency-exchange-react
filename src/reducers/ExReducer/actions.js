import { getOnlyNumbers, numberWithSpaces, roundCurrency } from '../../utils';

export const changeMainInputValue = (value, baseRates) => {
  const { mainSelectRate, secSelectRate } = baseRates;
  value = getOnlyNumbers(value);

  const calculatedValue = roundCurrency(
    (secSelectRate / mainSelectRate) * value
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
  const { mainSelectRate, secSelectRate } = baseRates;
  value = getOnlyNumbers(value);

  const calculatedValue = roundCurrency(
    (mainSelectRate / secSelectRate) * value
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
  const { secSelectRate } = baseRates;
  inputValue = getOnlyNumbers(inputValue);

  const calculatedValue = roundCurrency(
    (secSelectRate / currentRate) * inputValue
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
  const { mainSelectRate } = baseRates;
  inputValue = getOnlyNumbers(inputValue);

  const calculatedValue = roundCurrency(
    (currentRate / mainSelectRate) * inputValue
  );

  return {
    type: 'SET_SECONDARY_SELECT',
    payload: {
      value: value,
      secondaryInput: numberWithSpaces(calculatedValue),
    },
  };
};
