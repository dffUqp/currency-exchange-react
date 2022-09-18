import React, { useEffect, useReducer, useState } from 'react';
import { Container, Stack } from '@mui/material';
import { UseFetching } from '../../hooks/UseFetching';
import ExchangeService from '../../services/ExchangeService';
import { initialState, reducer } from '../../reducers/ExReducer/index';
import ExchangerBlock from '../ExchangerBlock';
import ExchangerBlockSkeleton from '../UI/loaders/ExchangerBlockSkeleton';
import { useMemo } from 'react';

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

  const baseRates = useMemo(() => {
    return {
      mainSelectRate: data[state.mainSelect],
      secSelectRate: data[state.secondarySelect],
    };
  }, [data, state.mainSelect, state.secondarySelect]);

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
              data={data}
              baseRates={baseRates}
            />
            <ExchangerBlock
              type="secondary"
              state={state}
              dispatch={dispatch}
              data={data}
              baseRates={baseRates}
            />
          </>
        )}
      </Stack>
    </Container>
  );
};

export default Exchanger;
