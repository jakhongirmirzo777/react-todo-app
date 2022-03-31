import React from "react";
import AppCard from "./AppCard";
import AppButton from "./AppButton";
import classes from './AppErrorDialog.module.css'

const AppErrorDialog = ({title, message, errorHandler}) => {
    return (
        <div>
            <div className={classes['backdrop']} onClick={errorHandler}/>
            <AppCard className={classes['modal']}>
                <header className={classes['header']}>
                    <h2>{title}</h2>
                </header>
                <div className={classes['content']}>
                    <p>{message}</p>
                </div>
                <footer className={classes['actions']}>
                    <AppButton onClick={errorHandler}>Okay</AppButton>
                </footer>
            </AppCard>
        </div>
    )
}

export default AppErrorDialog