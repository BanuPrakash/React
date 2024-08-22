import { useCallback, useMemo } from "react";

// expensive function
function computeTotal() {
    console.log("called Compute Total");
    let total = 0.0;
    for (let i = 0; i < 1000000000; i++) {
        total += i;
    }
    return total;
}

// Heavy Component, takes time to render...
export default function MyComponent({ count }) {
    const handleLoad = useCallback(() => {
        console.log("Mycomponent loaded!!!!");
    }, [])

    window.addEventListener("load", handleLoad);

    let total = useMemo(() => computeTotal(), []); // memoize the return value
    //  let total = computeTotal();
    return <div>
        Count: {count} <br />
        Total : {total} <br />
    </div>
}