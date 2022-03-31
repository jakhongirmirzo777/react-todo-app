import React, {useState} from "react";
import AppCard from "../UI/AppCard";
import classes from "./AddUser.module.css"
import AppButton from "../UI/AppButton";

const FORM_DATA = {
    username: '',
    age: ''
}

const AddUser = ({onAddUserHandler}) => {
    const [formData, setFormData] = useState({...FORM_DATA})
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
        if (!formData.username.length || !formData.age.length || +formData.age < 1) return
        onAddUserHandler(formData)
        setFormData({...FORM_DATA})
    }
    return (
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
    )
}

export default AddUser