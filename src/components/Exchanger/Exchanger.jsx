import React, { useEffect, useReducer, useState } from 'react';
import { Container, Stack } from '@mui/material';
import { UseFetching } from '../../hooks/UseFetching';
import ExchangeService from '../../services/ExchangeService';
import { initialState, reducer } from '../../reducers/ExReducer/index';
import ExchangerBlock from '../ExchangerBlock';
import ExchangerBlockSkeleton from '../UI/loaders/ExchangerBlockSkeleton';

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
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 5, sm: 10 }}
        sx={{ p: '20px 0' }}
      >
        {isLoading || error ? (
          <>
            <ExchangerBlockSkeleton />
            <ExchangerBlockSkeleton />
          </>
        ) : (
          <>
            <ExchangerBlock
              type="main"
              state={state}
              dispatch={dispatch}
              baseRates={baseRates}
            />
            <ExchangerBlock
              type="secondary"
              state={state}
              dispatch={dispatch}
              baseRates={baseRates}
            />
          </>
        )}
      </Stack>
    </Container>
  );
};

export default Exchanger;
