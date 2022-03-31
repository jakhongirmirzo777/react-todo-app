import React from "react";
import classes from './AppButton.module.css'

const AppButton = ({className, children, type, onClick}) => {
    return (
        <button
            className={`${classes['button']} ${className}`}
            type={type || 'button'}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default AppButton