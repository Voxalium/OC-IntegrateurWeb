import { drawData } from "./drawData.js";
import data from "./fetchData.js";
//DOM
const gallery = document.querySelector(".gallery");
const modalGrid = document.querySelector('.modal-grid')
//Fetch
const dataSet = new Set();
dataSet.add(data);
//Draw data
drawData(dataSet, gallery);
drawData(dataSet, modalGrid);
