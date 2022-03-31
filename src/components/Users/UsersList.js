import React from "react";
import AppCard from "../UI/AppCard";
import classes from "./UserList.module.css"

const UsersList = ({users = []}) => {
    return (
        <AppCard className={classes['users']}>
            <ul>
                {users.map((user, i) => (
                    <li key={user.id || i}>
                        {user.username} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </AppCard>
    )
}

export default UsersList