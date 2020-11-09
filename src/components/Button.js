import React from 'react';

const Button = ({ className, text = "Sin texto" }) => {
    return (
        <button className={className}>{text}</button>
    )
}

export default Button;