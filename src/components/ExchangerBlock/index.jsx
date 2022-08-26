import React, { useMemo } from 'react';
import CurrencyInput from '../UI/input/CurrencyInput';
import CurrencySelect from '../UI/select/CurrencySelect';
import { selectOptions } from './selectOptions';
import styles from './ExchangerBlock.module.scss';
import { ExchangeActions } from '../../reducers/ExReducer';

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
        inputAction: ExchangeActions.changemainInputValue,
        selectAction: ExchangeActions.setmainSelect,
      };
    }

    return {
      selectValue: state.secondarySelect,
      inputValue: state.secondaryInput,
      inputValueForCalc: state.mainInput,
      inputAction: ExchangeActions.changesecondaryInputValue,
      selectAction: ExchangeActions.setsecondarySelect,
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
