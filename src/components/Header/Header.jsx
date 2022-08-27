import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { UseFetching } from '../../hooks/UseFetching';
import ExchangeService from '../../services/ExchangeService';
import { roundCurrency } from '../../utils';
import styles from './Header.module.scss';

const Header = () => {
  const [data, setData] = useState(null);

  const [fetching, isLoading, error] = UseFetching(async () => {
    const respons = await ExchangeService.getCurrenciesUsd();
    setData(respons.data.usd);
  });

  useEffect(() => {
    fetching();
    // eslint-disable-next-line
  }, []);

  return (
    <header>
      <Container maxWidth="lg">
        {isLoading || error ? null : (
          <div className={styles.header}>
            <span>{roundCurrency(data?.usd)} USD</span>/
            <span>{roundCurrency(data?.uah)} UAH</span>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
