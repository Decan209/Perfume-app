import { useState, useEffect } from "react";

interface UseFetchProps {
    method?: string;
    body?: object;
}

interface UseFetchReturn {
    data: any;
    loading: boolean;
    error: any;
}

const useFetchTA = (url: string, { method = 'GET', body }: UseFetchProps = {}) : UseFetchReturn => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);
    const [initialFetchDone, setInitialFetchDone] = useState<boolean>(false);

    useEffect(() => {
        if(!initialFetchDone) {
            setInitialFetchDone(true);
            return
        }

        const fetchData = async () => {
            try {
                const options = {
                    method,
                    headers: { 'Content-Type': 'application/json' },
                    body: body ? JSON.stringify(body) : undefined
                }
                const response = await fetch(url, options);
                const jsonData = await response.json();
                setData(jsonData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [url, method, body, initialFetchDone])

    return {data, loading, error}
}

export default useFetchTA;
