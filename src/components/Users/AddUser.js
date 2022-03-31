import React, {useState} from "react";
import AppCard from "../UI/AppCard";
import classes from "./AddUser.module.css"
import AppButton from "../UI/AppButton";
import AppErrorDialog from "../UI/AppErrorDialog";

const FORM_DATA = {
    username: '',
    age: ''
}

const ERROR_DIALOG = {
    dialog: false,
    title: '',
    message: ''
}

const AddUser = ({onAddUserHandler}) => {
    const [formData, setFormData] = useState({...FORM_DATA})
    const [errorDialog, setErrorDialog] = useState({...ERROR_DIALOG})

    const onInput = (type) => {
        return (e) => {
            setFormData((prevState) => ({
                ...prevState,
                [type]: e.target.value
            }))
        }
    }

    const addUserHandler = (e) => {
        e.preventDefault()
        if (!formData.username.length || !formData.age.length) return setErrorDialog({
            dialog: true,
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty values)'
        });
        if (+formData.age < 1) return setErrorDialog({
            dialog: true,
            title: 'Invalid age',
            message: 'Please enter a valid age (> 0)'
        });
        onAddUserHandler(formData)
        setErrorDialog({...ERROR_DIALOG})
        setFormData({...FORM_DATA})
    }

    const errorHandler = () => {
        setErrorDialog({...ERROR_DIALOG})
    }

    return (
        <div>
            <AppCard className={classes['input']}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        type="text"
                        value={formData.username}
                        onChange={onInput('username')}/>
                    <label htmlFor='age'>Age</label>
                    <input
                        id='age'
                        type="number"
                        value={formData.age}
                        onChange={onInput('age')}/>
                    <AppButton type='submit'>Add User</AppButton>
                </form>
            </AppCard>
            {errorDialog.dialog && <AppErrorDialog errorHandler={errorHandler} title={errorDialog.title} message={errorDialog.message}/>}
        </div>
    )
}

export default AddUser