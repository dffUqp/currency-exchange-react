import React, { useMemo } from 'react';
import CurrencyInput from '../UI/input/CurrencyInput';
import CurrencySelect from '../UI/select/CurrencySelect';
import { selectOptions } from './selectOptions';
import styles from './ExchangerBlock.module.scss';
import { ExchangeActions } from '../../reducers/ExReducer';
import PropTypes from 'prop-types';

const ExchangerBlock = ({
  type = 'main',
  state,
  dispatch,
  data,
  baseRates,
}) => {
  const {
    selectValue,
    inputValue,
    inputAction,
    selectAction,
    inputValueForCalc,
  } = useMemo(() => {
    if (type === 'main') {
      return {
        selectValue: state.mainSelect,
        inputValue: state.mainInput,
        inputAction: ExchangeActions.changeMainInputValue,
        selectAction: ExchangeActions.setMainSelect,
      };
    }

    return {
      selectValue: state.secondarySelect,
      inputValue: state.secondaryInput,
      inputValueForCalc: state.mainInput,
      inputAction: ExchangeActions.changeSecondaryInputValue,
      selectAction: ExchangeActions.setSecondarySelect,
    };
  }, [type, state]);
  

  return (
    <div className={styles.block}>
      <CurrencySelect
        value={selectValue}
        onChange={(value) =>
          dispatch(
            selectAction(
              value,
              inputValueForCalc ?? inputValue,
              baseRates,
              data[value]
            )
          )
        }
        option={selectOptions}
      />
      <CurrencyInput
        value={inputValue}
        onChange={(value) => dispatch(inputAction(value, baseRates))}
      />
    </div>
  );
};

export default ExchangerBlock;

ExchangerBlock.propTypes = {
  type: PropTypes.string,

  state: PropTypes.shape({
    mainInput: PropTypes.string,
    secondaryInput: PropTypes.string,
    mainSelect: PropTypes.string,
    secondarySelect: PropTypes.string,
  }).isRequired,

  dispatch: PropTypes.any.isRequired,

  data: PropTypes.any.isRequired,

  baseRates: PropTypes.shape({
    item1: PropTypes.number,
    item2: PropTypes.number,
  }).isRequired,
};
