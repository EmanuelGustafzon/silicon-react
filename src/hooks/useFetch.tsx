import { useState, useEffect } from "react";

const useFetch = (endpoint: string, url?: string) => {
    const baseUrl = 'https://win24-assignment.azurewebsites.net/api';
    if(!url) url = baseUrl;
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(`${url}/${endpoint}`);
                const data = await res.json();
                setData(data);
            } catch(error) {
                if (error instanceof Error) {
                    const errorMessage: string = error.message;
                    setError(errorMessage);
                } else {
                    setError("An unknown error occurred");
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