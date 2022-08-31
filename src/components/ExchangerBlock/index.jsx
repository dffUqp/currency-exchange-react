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
  const props = useMemo(() => {
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
        value={props.selectValue}
        onChange={(value) =>
          dispatch(
            props.selectAction(
              value,
              type === 'main' ? props.inputValue : props.inputValueForCalc,
              baseRates,
              data[value]
            )
          )
        }
        option={selectOptions}
      />
      <CurrencyInput
        value={props.inputValue}
        onChange={(value) => dispatch(props.inputAction(value, baseRates))}
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
