export {menu}

function menu(){
    const heroText = document.createElement("h1");
    heroText.innerHTML = 'This is the Recipe page where you will find all kinds of recipes! Coming Soon..';

    const container = document.querySelector("#content");
    container.appendChild(heroText);
}
