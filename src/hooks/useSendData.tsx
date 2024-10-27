import { useState } from "react";

function useSendData(endpoint: string, url?: string) {
    const baseUrl = 'https://win24-assignment.azurewebsites.net/api/forms';
    if(!url) url = baseUrl;
    
    const [response, setResponse ] = useState<Response | null>(null)
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const send = async (data: unknown) => {
        setLoading(true)
        try {
            const res = await fetch(`${url}/${endpoint}`, { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            setResponse(res)
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
    return {
        send,
        response,
        loading,
        error
    };
}

export default useSendData;