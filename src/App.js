import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import AppWrapper from "./components/Helpers/AppWrapper";

const App = () => {
    const [users, setUsers] = useState([])
    const onAddUserHandler = (formData) => {
        setUsers(prevState => [...prevState, {id: Math.random().toString(), ...formData}])
    }
    return (
        <AppWrapper>
            <AddUser onAddUserHandler={onAddUserHandler}/>
            <UsersList users={users}/>
        </AppWrapper>
    );
}

export default App;
