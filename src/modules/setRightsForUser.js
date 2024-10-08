const url = "http://10.24.16.109:3231/user_rights"

export default async function setRightsForUser(token, data) {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Authorization": token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return await res.json();
}