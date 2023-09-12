import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.Header} data-testid="Header">
    Meme maker<hr/>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
