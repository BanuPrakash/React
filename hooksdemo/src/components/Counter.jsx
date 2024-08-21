import { useState } from "react"

export default function Counter() {
    let [count, setCount] = useState(0); // to introduce state variable in functional components
    let [name, setName] = useState("Roger");

    return <div>
        Name: {name} <br />
        Count : {count} <br />
        <button type="button" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
}

