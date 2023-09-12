import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';

const memeFormInitialState = {}
const MemeForm = (props) => {
  useEffect(() => {
    console.log('montage de MemeForm')
  }, [])
  const [state, setState] = useState(memeFormInitialState)
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      MemeForm Component
    </div>)
};

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
