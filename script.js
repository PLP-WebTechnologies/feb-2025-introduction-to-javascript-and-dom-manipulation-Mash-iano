// Change text content dynamically
function changeText() {
    document.getElementById("description").textContent = "The paragraph text has been updated!";
  }
  
  // Modify CSS styles dynamically
  function toggleHighlight() {
    const heading = document.getElementById("main-heading");
    heading.classList.toggle("highlight");
  }
  
  // Add a new name
  function addElement() {
    const ul = document.getElementById("item-list");
    const names = ["Jane", "Mark", "Amina", "Carlos", "Zuri"];
    const newItem = document.createElement("li");
    const randomIndex = Math.floor(Math.random() * names.length);
    newItem.textContent = names[randomIndex];
    ul.appendChild(newItem);
  }
  
  // Remove the last name
  function removeElement() {
    const ul = document.getElementById("item-list");
    if (ul.lastElementChild) {
      ul.removeChild(ul.lastElementChild);
    }
  }
  
  