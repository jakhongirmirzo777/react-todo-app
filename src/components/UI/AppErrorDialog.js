import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import AppCard from "./AppCard";
import AppButton from "./AppButton";
import classes from './AppErrorDialog.module.css'

const Backdrop = ({errorHandler}) => (<div onClick={errorHandler} className={classes['backdrop']}/>)

const Overlay = ({title, message, errorHandler}) => (
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
)

const AppErrorDialog = ({title, message, errorHandler}) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop errorHandler={errorHandler}/>,
                document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(
                <Overlay
                    title={title}
                    message={message}
                    errorHandler={errorHandler}/>,
                document.getElementById('overlay-root'))}
        </Fragment>
    )
}

export default AppErrorDialog