const url = "http://10.24.16.109:3231/drillingteam"

export default async function setDrillingTeam(token, data) {
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