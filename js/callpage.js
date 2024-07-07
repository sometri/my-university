// Get the div elements
const headerDiv = document.getElementById('header');
const menuDiv = document.getElementById('menu');
const sliderDiv = document.getElementById('slider');
const galleryDiv = document.getElementById('gallery')
const mainDiv = document.getElementById('main');
const footerDiv = document.getElementById('footer');

// Load the HTML files into the div elements
const loadHTML = (file, element) => {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      element.innerHTML = data;
    });
};

loadHTML('../html/header.html', headerDiv);
loadHTML('../html/menu.html', menuDiv);
loadHTML('../html/slider.html', sliderDiv);
loadHTML('../html/gallery.html', galleryDiv);
loadHTML('../html/main.html', mainDiv);
loadHTML('../html/footer.html', footerDiv);