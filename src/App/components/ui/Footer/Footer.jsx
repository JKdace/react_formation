import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = () => (
  <div className={styles.Footer} data-testid="Footer">
    J.B. 2023
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
