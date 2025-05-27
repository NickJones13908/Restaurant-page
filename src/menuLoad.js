import { menuItems } from "./menuItems.js";
import { x } from "./menuItems.js"; 


function menuLoad(){
    console.log("Menu items loaded:", menuItems);
    const content = document.getElementById("content");
    content.textContent = ""; // Clear existing content
    content.removeAttribute("class"); // Remove any existing class
    content.classList.add("menu-content"); 
    console.log(content.classList);
    const header = document.createElement("h1");
    header.textContent = "Menu";
    const menuList = document.createElement("ul");
    menuItems.forEach(item => {
        const listItem = document.createElement("li");
        const itemName = document.createElement("h2");
        itemName.textContent = item.name;
        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.description;
        const itemPrice = document.createElement("p");
        itemPrice.textContent = item.price;
        const itemImage = document.createElement("img");
        itemImage.src = item.image;
        itemImage.alt = item.name;
        
        listItem.appendChild(itemImage);
        listItem.appendChild(itemName);
        listItem.appendChild(itemDescription);
        listItem.appendChild(itemPrice);
        
        menuList.appendChild(listItem);
    });
    content.appendChild(header);
    content.appendChild(menuList);
}
export { menuLoad };
