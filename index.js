  // Brings in information about paintings as object.
  import data from "./data.js";
  const paintings = data.artObjects;

  // Loops through the paintings and displaying each one.
  for (let i = 0; i < paintings.length; i++) {
    if (paintings[i].webImage.width > 500 && paintings[i].principalOrFirstMaker.indexOf('Honthorst') === -1) {
      const currentPainting = paintings[i];
      displayPainting(currentPainting, i);
    }
  }

  // Function to display painting. 
  function displayPainting (painting, index) {
    // Creates element to act as link to painting detail page. 
    const paintingLink = document.createElement('a');
    paintingLink.href = "./pages/detail-page.html";
    // Creates the image which the user clicks on.
    const paintingImg = document.createElement('img');
    paintingImg.alt = painting.title;
    paintingLink.appendChild(paintingImg);
    // We need a way to refer to each painting individually. Reason is that i takes on value of 10 as soon as paintings are displayed.  
    paintingLink.number = index;
    paintingImg.id = `painting${index}`
    paintingImg.className = "artObject" 
    paintingImg.src = painting.webImage.url;
    // Image changes when moused over. Has to come before displaying images.
    paintingImg.onmouseover = function () {switchToCuteAnimal(paintingLink.number)};
    // Displays the images. 
    const gallery = document.getElementById('gallery');
    gallery.appendChild(paintingLink);
  }

  // Function for mouseover on image. 
  function switchToCuteAnimal (number) {
      const painting = document.getElementById(`painting${number}`);
      painting.src = "/images/somerodent.jpg";
  }