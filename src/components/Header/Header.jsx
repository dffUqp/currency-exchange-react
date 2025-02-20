import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useFetching } from '../../hooks/useFetching';
import ExchangeService from '../../services/ExchangeService';
import { roundCurrency } from '../../utils';
import HeaderSkeleton from '../UI/loaders/HeaderSkeleton';
import styles from './Header.module.scss';

const Header = () => {
  const [data, setData] = useState(null);

  const [fetching, isLoading, error] = useFetching(async () => {
    const response = await ExchangeService.getCurrenciesUsd();
    setData(response.data.usd);
  });

  useEffect(() => {
    fetching();
    // eslint-disable-next-line
  }, []);

  return (
    <header>
      <Container maxWidth="lg">
        <div className={styles.header}>
          {isLoading || error ? (
            <HeaderSkeleton />
          ) : (
            <>
              <span>{roundCurrency(data?.usd)} USD</span>/
              <span>{roundCurrency(data?.uah)} UAH</span>
            </>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
