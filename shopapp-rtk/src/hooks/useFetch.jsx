import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

// custom hook
const useFetch = (url) => {
    const [status, setStatus] = useState("idle"); // fetched / rejected
    const [data, setData] = useState([]);
    const cache = useRef({}); // pointer to a json object

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            setStatus("fetching"); // or pending
            if (cache.current[url]) {
                const data = cache.current[url];
                setData(data);
                setStatus("fetched");
            } else {
                const response = await fetch(url);
                const data = await response.json();
                cache.current[url] = data;
                setData(data);
                setStatus("fetched");
            }
        };

        fetchData();
    }, [url]);

    return { status, data };
}

export default useFetch;