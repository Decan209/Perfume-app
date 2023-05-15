import { useState, useEffect, useCallback } from "react";
import axios from "axios";

interface UseFetchAxiosReturn {
    responses : {
        data: any;
        error: any;
        isLoading: boolean
    }
    doFetch: (options: any) => void;
}


const useFetchAxios = (url: string): UseFetchAxiosReturn => {
    const  [options, setOptions] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)
    
    const doFetch = useCallback((options: any) => {
        setOptions(options);
        setIsLoading(true);
    }, [])
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                if(!isLoading) {
                    return;
                }
                // console.log("real fetching data", url, isLoading)
                const res = await axios(url, options);
                setData(res.data);
            } catch (err: any) {
                setError(err);
            }
            setIsLoading(false);
        }
        fetchData();
    }, [isLoading, url, options])
    const responses = {data, error, isLoading};
    return {responses, doFetch};
}

export default useFetchAxios;