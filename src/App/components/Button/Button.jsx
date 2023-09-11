import React from 'react'
import style from './Button.module.css'
import propTypes from 'prop-types'
/**
 * 
 * @param {*} props 
 * @returns 
 */
const Button=(props) => {
    return <button onClick={(evt) => {
        props.onClick('test');
    }} className={style.Button} style={{
        backgroundColor: props.bgColor,
        ...props.style,
    }}>{props.children}</button>
}

Button.propTypes = {
    children: propTypes.any.isRequired,
    bgColor: propTypes.oneOf(['skyblue','yellow','transparent','white']),
    style: propTypes.shape({
        width: propTypes.string,
        padding: propTypes.string
    })
}

Button.defaultProps = {
    bgColor: 'skyblue'
}

export default Button;