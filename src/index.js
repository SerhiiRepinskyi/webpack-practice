// import example from "./images/smoke.png";
// import imgSvg from "./images/flat.svg";
// import { sum } from "./helper/sum.js";
// import "./styles/main.scss";

// console.log("Webpack");
// // // Create a class property without a constructor
// class Game {
//   name = "Violin Charades";
// }
// const myGame = new Game();
// // Create paragraph node
// const p = document.createElement("p");
// p.textContent = `I like ${myGame.name}.`;

// // Create heading node
// const heading = document.createElement("h1");
// heading.textContent = "Interesting!";

// // Append SVG and heading nodes to the DOM
// const app = document.querySelector("#root");
// app.append(heading, p);

// const img = document.createElement("img");
// img.src = example;
// app.append(img);

// const svgImg = document.createElement("img");
// svgImg.src = imgSvg;
// app.append(svgImg);

// console.log(sum(2, 3));


import './styles/style.css'

// ========== task 1 ==========
import { base, list, frameworks, libs } from "./data/hbsData";
import hbsBase from './templates/base.hbs'
import hbsList from "./templates/list.hbs";
import hbsFrameworks from "./templates/frameworks.hbs";
import hbsLibs from "./templates/libs.hbs";

const markupBase = hbsBase(base);
// console.log(markupBase);
const markupList = hbsList(list);
// console.log(markupList);
const markupFrameworks = hbsFrameworks(frameworks);
// console.log(markupFrameworks);
const markupLibs = hbsLibs(libs);
// console.log(markupLibs);

const root = document.querySelector("#root");

root.insertAdjacentHTML("beforeend", markupBase);
root.insertAdjacentHTML("beforeend", markupList);
root.insertAdjacentHTML("beforeend", markupFrameworks);
root.insertAdjacentHTML("beforeend", markupLibs);

// ========== task 2 ==========
// В input вводяться дані. При натисканні Add додається список.
// При перезавантаженні сторінки список не зникає.
// Дані зберегти в localStorage, очистити.
// Рознести по файлам, використати import.