import "./styles.css";
import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");

home();

homeButton.addEventListener("click", ()=>{
    const container = document.querySelector("#content");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    home();
})

menuButton.addEventListener("click", ()=>{
    const container = document.querySelector("#content");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    menu();
})

contactButton.addEventListener("click", ()=>{
    const container = document.querySelector("#content");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    contact();
})
