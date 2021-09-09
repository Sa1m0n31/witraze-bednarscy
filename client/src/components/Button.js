import React from 'react'

const Button = ({text, extraClass, link}) => {
    return <a className={`button ${extraClass}`} href={link} >
        {text}
    </a>
}

export default Button;
