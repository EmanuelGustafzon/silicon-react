import { useState, useEffect } from "react";

function useFetch<T = unknown>(endpoint: string, url?: string) {
    const baseUrl = 'https://win24-assignment.azurewebsites.net/api';
    if(!url) url = baseUrl;
    
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(`${url}/${endpoint}`);
                const data = await res.json();
                setData(data);
            } catch(error) {
                if (error instanceof Error) {
                    setError(error);
                } else {
                    setError(new Error("An unknown error occurred"));
                }
                
            } finally {
            setLoading(false)
        }
    };

    getData();

    }, [url, endpoint]);

    return {
        data,
        loading,
        error
    };
}

export default useFetch;