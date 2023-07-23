const images = ["bk00.jpg", "bk01.jpg", "bk02.jpg", "bk03.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];
const bkImage = document.createElement("img");
bkImage.src = `img/${chosenImage}`;
bkImage.className = "background";
document.body.appendChild(bkImage);