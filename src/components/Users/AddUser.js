import React from "react";
import AppCard from "../UI/AppCard";
import classes from "./AddUser.module.css"
import AppButton from "../UI/AppButton";

const AddUser = () => {
    const addUserHandler = (e) => {
        e.preventDefault()
    }
    return (
        <AppCard className={classes['input']}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' type="text"/>
                <label htmlFor='age'>Username</label>
                <input id='age' type="number"/>
                <AppButton type='submit'>Add User</AppButton>
            </form>
        </AppCard>
    )
}

export default AddUser