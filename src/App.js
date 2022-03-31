import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
    const [users, setUsers] = useState([])
    const onAddUserHandler = (formData) => {
        setUsers(prevState => [...prevState, {id: Math.random().toString(), ...formData}])
    }
    return (
        <div>
            <AddUser onAddUserHandler={onAddUserHandler}/>
            <UsersList users={users}/>
        </div>
    );
}

export default App;
