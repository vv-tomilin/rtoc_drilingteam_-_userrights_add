import { auth } from "../../settings.js"

const url = "http://10.24.16.109:3231/token";

export default async function getToken() {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(auth.auth)
    });

    return await res.json();
}