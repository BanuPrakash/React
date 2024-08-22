import { lazy, Suspense, useState } from "react";
const MyComponent = lazy(() => import ("./MyComponent"));

export default function BaseComponent() {
    let [count, setCount] = useState(0);
    return (
        <div>
                <h1>Base Component</h1>
                <Suspense fallback={<h1>Loading MyComponent....</h1>}>
                    <MyComponent count={count} />
                </Suspense>
                
                <button onClick={() => setCount(count + 1)}> + </button>
        </div>
    )
}