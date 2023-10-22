import { drawData } from "./drawData.js";
import data from "./fetchData.js";
//DOM
const gallery = document.querySelector(".gallery");
//Fetch
const dataSet = new Set();
dataSet.add(data);
//Draw data
drawData(dataSet, gallery);
