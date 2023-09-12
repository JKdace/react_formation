import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import styles from './TemplateName.module.css';

const templateNameInitialState = {}
const TemplateName = (props) => {
  useEffect(() => {
    console.log('montage de TemplateName')
  }, [])
  const [state, setState] = useState(templateNameInitialState)
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component
    </div>)
};

TemplateName.propTypes = {};

TemplateName.defaultProps = {};

export default TemplateName;
