import React from 'react'
import style from './Button.module.css'
import propTypes from 'prop-types'
/**
 * 
 * @param {*} props 
 * @returns 
 */
const Button=(props) => {
    // j'appelle via les props la fonction du parent, le moyen de remonter des infos
    return <button onClick={(evt) => {
        props.onClick();
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