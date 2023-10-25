import { drawData } from "./drawData.js";

const url = "http://localhost:5678/api/works";

export function fetchData(dataSet, container, filter) {
    fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Can't fetch data");
            }
            return res.json();
        })
        .then((data) => {
            dataSet.clear();
            if (filter === "Tous") {
                dataSet.add(data);
                drawData(dataSet, container);
            } else {
                dataSet.add(
                    data.filter((i) => {
                        return i.category.name === filter;
                    })
                );
                drawData(dataSet, container);
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}
