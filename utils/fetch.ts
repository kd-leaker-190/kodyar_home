export const postFetch = async (url: string, body: object, headers = {}) => {
    const response = await fetch(`http://localhost:8000/api${url}`, {
        cache: "no-store",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...headers,
        },
        body: JSON.stringify(body),
    });

    const data = await response.json();
    return data;
};
