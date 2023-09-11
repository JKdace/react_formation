import React from 'react'
import style from './Button.module.css'
import propTypes from 'prop-types'
/**
 * 
 * @param {*} props 
 * @returns 
 */
const Button=(props) => {
    console.log(props);
    return <button className={style.Button} style={{backgroundColor: props.bgColor}}>{props.text}</button>
}

Button.propTypes = {
    text: propTypes.string.isRequired,
    bgColor: propTypes.oneOf(['skyblue','tomato','transparent']).isRequired
}


export default Button;