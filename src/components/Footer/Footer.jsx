import { Container } from '@mui/system';
import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="lg">
        <div className={styles.footer__item}>
          <span className={styles.footer__text}>
            &gt;this app created by dffUqp
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
