import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { UseFetching } from '../../hooks/UseFetching';
import ExchangeService from '../../services/ExchangeService';
import { formatCurrency } from '../../utils/formarCurrency';
import styles from './Header.module.scss';

const Header = () => {
  const [data, setData] = useState(null);

  const [fetching] = UseFetching(async () => {
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
        <div className={styles.header}>
          <span>{formatCurrency(data?.usd)} USD</span>/
          <span>{formatCurrency(data?.uah)} UAH</span>
        </div>
      </Container>
    </header>
  );
};

export default Header;