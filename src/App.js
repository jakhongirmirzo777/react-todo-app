import React, {useState, Fragment, Profiler} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import UsersTest from "./components/Users/UsersTest";
import UsersTest2 from "./components/Users/UsersTest2";

const onRenderCallback = (id,
                          phase,
                          actualDuration,
                          baseDuration,
                          startTime,
                          commitTime,
                          interactions) => {
    console.log(
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
        interactions)
}


const App = () => {
    const [users, setUsers] = useState([])
    const onAddUserHandler = (formData) => {
        setUsers(prevState => [...prevState, {id: Math.random().toString(), ...formData}])
    }
    return (
        <Fragment>
            <Profiler id='AddUser' onRender={onRenderCallback}>
                <AddUser onAddUserHandler={onAddUserHandler}/>
            </Profiler>
            <UsersTest value={'111'}>
                <div>Hello</div>
            </UsersTest>
            <UsersTest2 name={'test'}/>
            <UsersList users={users}/>
        </Fragment>
    );
}

export default App;
