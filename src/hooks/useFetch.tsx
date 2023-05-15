import { useState, useEffect } from "react";

interface UseFetchProps {
    method?: string;
    body?: object;
}

interface UseFetchReturn {
    data: any;
    loadding: boolean;
    error: any;
}

const useFetch = (url: string, { method = "GET", body }: UseFetchProps = {}) : UseFetchReturn => {
    const [data, setData] = useState<any>(null);
    const [loadding, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
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
                setLoading(true);
            }
        }
        fetchData()
    }, [url, method, body])

    return {data, loadding, error}
}

export default useFetch;
