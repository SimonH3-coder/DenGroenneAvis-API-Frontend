import { useState, useEffect } from 'react';

export function useFetch(url) {
    const [data, setData] = useState(null);
     const [error, setError] = useState(null);
    const [isloading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new error ('Failed to fetch data');
                }
                const data = await res.json();
                setData(data);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false);

            }
        }
        getData();
    }, [url]);

    return { data, error, isloading };
}
    


