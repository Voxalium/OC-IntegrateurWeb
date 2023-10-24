const url = "http://localhost:5678/api/works/";

const req = {
    method: "DELETE",
    headers: {
        accept: "*/*",
        Authorization: `Bearer ${token}`,
    },
};

fetch(url, req)
    .then((res) => {
        if (res.status === 200) {
            console.log("Item deleted");
        } else if (res.status === 401) {
            console.error("Unauthorized");
        } else {
            console.error("Unexpected behaviour");
        }
    })
    .catch((err) => {
        console.error("Error", err);
    });
