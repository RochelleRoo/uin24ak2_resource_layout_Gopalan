// Fetch the data from the JSON file when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => getObject('HTML'));

// Initialize the navigation HTML with an unordered list
let navHTML = `<ul>`;

// Populate navHTML with list items based on the 'resources' array
resources.map(item => {
    navHTML += `<li onclick="getObject('${item.category}'); addActive(this);">${item.category}</li>`;
});

// Append navHTML to the navigation element
const nav = document.getElementsByTagName("nav")[0];
nav.innerHTML += navHTML + `</ul>`;

// Add a 'active' class to the clicked navigation element
function addActive(clickedElement) {
    // Remove the 'active' class from all li elements
    const listItems = document.querySelectorAll("nav ul li");
    listItems.forEach(li => li.classList.remove("active"));

    // Add the 'active' class to the clicked element
    clickedElement.classList.add("active");
}

// Retrieve the specified/selected object and display its content
function getObject(categoryTitle) {
    // Variable to store HTML content for the main section
    let mainHTML = "";
    // Retrieve specified object(s)
    let objects = resources.filter(resource => resource.category === categoryTitle);

    // Extract items from the object(s) and concatenate HTML
    objects.map(mainItems => {
        mainHTML += `<h1>${mainItems.category}</h1><p>${mainItems.text}</p>`;
        
        mainItems.sources.map(sources => {
            mainHTML += `<li><a href="${sources.url}">${sources.title}</a></li>`;
        });
    });

    // Display the content in the main section
    const main = document.getElementsByTagName("main")[0];
    main.innerHTML = mainHTML;
}

// On page load, give the first li element the 'active' class
document.querySelector("nav ul li").classList.add("active");