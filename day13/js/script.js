const itemListContainer = document.querySelector(".item-list");

const newItem = document.createElement("div");

newItem.className = "item";
newItem.id = "jsAddedItem";
newItem.style.color = "red";

const textNode = document.createTextNode("Hello from js");

newItem.appendChild(textNode);

itemListContainer.appendChild(newItem);