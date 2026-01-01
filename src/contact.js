export {contact}

function contact(){
    const heroText = document.createElement("h1");
    heroText.innerHTML = 'This is the Contact page where you will be able to contact us, Coming Soon..';

    const container = document.querySelector("#content");
    container.appendChild(heroText);
}