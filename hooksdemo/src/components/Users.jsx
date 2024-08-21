import { useEffect, useState } from "react"

export default function Users({setUserId}) {
    let [users, setUsers] = useState();

    // componentDidMount
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return <div>
        {users && users.map(user => <div onMouseOver={() => setUserId(user.id)}>
            {user.name}, &nbsp; {user.email}
        </div>)}
    </div>
}