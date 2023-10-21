const url = "http://localhost:5678/api/works";
const res = await fetch(url);
const data = await res.json();

export default data;
