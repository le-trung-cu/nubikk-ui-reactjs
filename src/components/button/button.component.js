import React from 'react'
import './button.styles.scss'

const Button = ({ children, className, onClick }) => {
    return (
        <button className={`btn ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
