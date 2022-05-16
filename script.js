// Main Container
var container = document.createElement("div");
container.innerHTML = `<h1>FOX IMAGE</h1>`;
makeAttribute(container, "class", "container");

// Image container
var img = document.createElement("img");
makeAttribute(img, "src", "https://randomfox.ca//images//71.jpg");

var img_container = document.createElement("div");
makeAttribute(img_container, "class", "img-container");

img_container.append(img);

// Button container
var btn_container = document.createElement("div");
btn_container.setAttribute("class", "btn-container");
makeAttribute(btn_container, "class", "btn-container");
makeAttribute(btn_container, "onclick", "randomFox()");

var btn = document.createElement("button");
btn.innerText = "Refresh";

var logo = document.createElement("img");
makeAttribute(logo, "src", "https://www.svgrepo.com/show/14059/refresh.svg");

btn_container.append(btn);
btn_container.append(logo);

// Loader Animation
var loader = document.createElement("div");
makeAttribute(loader, "class", "loader");
loader.innerText = "Loading";

// Appending elements to main container
container.append(img_container);
container.append(btn_container);

document.body.append(container);

// Asychronous function to fetch data from api and load it
async function randomFox() {
    /*
        Function load image from the api "https://randomfox.ca/floof/" 
        and append it in the image container
    */
    console.log("called");
    img_container.innerHTML = ``;
    img_container.append(loader);
    container.append(img_container);
    container.append(btn_container);

    let res = await fetch("https://randomfox.ca/floof/");
    let result = await res.json();

    setTimeout(() => {
        img_container.innerHTML = ``;
        img.setAttribute("src", result["image"]);
        img_container.append(img);

        container.append(img_container);
        container.append(btn_container);
    }, 2000);
}

function makeAttribute(ele, attr, value) {
  ele.setAttribute(attr, value);
}
