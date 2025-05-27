
import "./styles.css";

import { homePageLoad } from "./homePageLoad.js";
import { menuLoad } from "./menuLoad.js";
import { contactLoad } from "./contactLoad.js";

homePageLoad();
let x = 1;
const menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", () => {
    menuLoad();
    console.log("Menu button clicked");
});
const homePageLoadButton = document.getElementById("home-button");
homePageLoadButton.addEventListener("click", () => {
    homePageLoad();


    
    console.log("Home button clicked");
});
const contactButton = document.getElementById("contact-button");
contactButton.addEventListener("click", () => {
    contactLoad();

});



