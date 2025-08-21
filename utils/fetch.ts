export const getFetch = async (url: string) => {
    const response = await fetch(`http://localhost:8000/api${url}`, {
        cache: "no-store",
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });

    if (response.ok) {
        const data = await response.json();
        return data.data;
    } else {
        throw new Error(`مشکل در دریافت اطلاعات کد ${response.status}`);
    }
};

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
