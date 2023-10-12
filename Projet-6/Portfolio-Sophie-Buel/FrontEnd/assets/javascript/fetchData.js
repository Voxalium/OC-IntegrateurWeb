export async function fetchData(url) {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("Can't fetch data");
    }
    return res.json();
}
