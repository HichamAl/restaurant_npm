export {home}

function home(){
    const headingText = document.createElement("h1");
    headingText.innerHTML = 'The is the Homepage content coming soon...';

    const image = document.createElement("IMG");
    image.setAttribute("src", "https://www.w3schools.com/Jsref/img_pulpit.jpg");

    const container = document.querySelector("#content");
    container.appendChild(headingText);
    container.appendChild(image);
}


