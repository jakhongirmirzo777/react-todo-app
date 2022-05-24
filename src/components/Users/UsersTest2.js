import PropTypes from 'prop-types'
import {useState, useTransition} from "react";

const UsersTest2 = ({name}) => {

    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState(0);

    function handleClick() {
        startTransition(() => {
            setCount(c => c + 1);
        })
    }
    return (
        <div>
            <span>{name}</span>
            <div>
                {isPending && <div>Loading ...</div>}
                <button onClick={handleClick}>Click me {count}</button>
            </div>
        </div>
    )
}

UsersTest2.propTypes = {
    name: PropTypes.string.isRequired
}

export default UsersTest2