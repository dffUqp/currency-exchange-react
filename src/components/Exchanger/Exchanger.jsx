import React, { useEffect, useReducer, useState } from 'react';
import { Container, Stack } from '@mui/material';
import { UseFetching } from '../../hooks/UseFetching';
import ExchangeService from '../../services/ExchangeService';
import { initialState, reducer } from '../../reducers/ExReducer/index';
import ExchangerBlock from '../ExchangerBlock';

const Exchanger = () => {
  const [data, setData] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState);
  const [fetching, isLoading, error] = UseFetching(async () => {
    const respons = await ExchangeService.getCurrenciesEur();
    setData(respons.data.eur);
  });

  useEffect(() => {
    fetching();
    // eslint-disable-next-line
  }, []);

  const baseRates = {
    item1: data[state.mainSelect],
    item2: data[state.secondarySelect],
  };

  return (
    <Container maxWidth="lg">
      {isLoading || error ? (
        <h1 style={{ color: 'grey' }}>lOADING...</h1>
      ) : (
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 5, sm: 10 }}
          sx={{ p: '20px 0' }}
        >
          <ExchangerBlock
            type="main"
            state={state}
            baseRates={baseRates}
            data={data}
            dispatch={dispatch}
          />

          <ExchangerBlock
            type="secondary"
            state={state}
            baseRates={baseRates}
            data={data}
            dispatch={dispatch}
          />
        </Stack>
      )}
    </Container>
  );
};

export default Exchanger;
