import React from 'react'
import './input.styles.scss'

const Input = ({ label, id, ...props }) => {
    return (
        <div className="input-group">
            {label ? <label className="input-label" htmlFor={id}>{label}</label> : null}
            <input id={id} className="input" {...props} />
        </div>
    )
}

export default Input
