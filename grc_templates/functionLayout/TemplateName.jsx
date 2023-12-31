import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import styles from "./TemplateName.module.css"

const TemplateName = (props) => {
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
        {props.children}
    </div>
    );
};

TemplateName.propTypes = {
    children: PropTypes.any.isRequired
};

TemplateName.defaultProps = {
    children: <div>Template layout empty component</div>
};

export default TemplateName;