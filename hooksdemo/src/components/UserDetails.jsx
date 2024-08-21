import { useEffect, useState } from "react"

export default function UserDetails({id}) {
    let [user, setUser] = useState(null);

    // componentDidUpdate
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + id)
        .then(response => response.json())
        .then(data => setUser(data));
    }, [id]);

    return <div>
        {
            user && <div>
                    Name: {user.name} <br />
                    Company: {user.company.name} <br />
                    Phone : {user.phone} <br />
                </div>
        }
    </div>
}