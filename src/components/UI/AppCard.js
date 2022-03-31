import React from "react";
import classes from './AppCard.module.css'

const AppCard = ({children, className}) => {
    return (
        <div className={`${classes['card']} ${className}`}>
            {children}
        </div>
    )
}

export default AppCard